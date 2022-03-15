import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../../component/authentication/Register";

afterEach(cleanup);

describe("sign up", () => {
  test("Register form should be in the document", () => {
    const loginRenderer = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    expect(screen.getByTestId("fullname")).toBeInTheDocument();
    expect(screen.getByTestId("companyname")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
  });
});
