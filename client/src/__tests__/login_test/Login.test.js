import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../../component/authentication/Login";

afterEach(cleanup);

describe("login", () => {
  test("Login form should be in the document", () => {
    const loginRenderer = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
  });
});
