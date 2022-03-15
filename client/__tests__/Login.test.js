import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import Login from "./src/component/authentication/Login";

afterEach(cleanup);

describe("login", () => {
  test("Login form should be in the document", () => {
    const loginRenderer = render(<Login />);
    console.log(loginRenderer);
  });
});
