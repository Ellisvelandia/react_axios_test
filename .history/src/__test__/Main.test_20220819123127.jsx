import React from "react";
import { render } from "@testing-library/react";
import Main from "../components/Main";
afterEach(cleanup);

test("rende component", () => {
  const { getByTestId } = render(<Main />);
  const container = getByTestId("container");

  expect(card).toBeDefined();
});
