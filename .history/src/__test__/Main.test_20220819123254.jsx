import React from "react";
import { render } from "@testing-library/react";
import Main from "../components/Main";
afterEach(cleanup);

test("rende component", () => {
  const { getByTestId } = render(<Main />);
  const Main = getByTestId("Main");

  expect(card).toBeDefined();
});
