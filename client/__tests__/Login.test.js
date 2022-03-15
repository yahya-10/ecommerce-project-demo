import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import Login from "./src/component/authentication/Login";

afterEach(cleanup);

it("should log the user in after entering the right credentials", async () => {
  const { getByTestId, getByText } = render(<Login />);

  fireEvent.click(getByTestId("login-user"));

  const pathname = new URL(window.location.pathname);

  const message = await waitForElement(() => getByText(pathname));
  expect(message).toHaveTextContent(pathname);
});
// });
