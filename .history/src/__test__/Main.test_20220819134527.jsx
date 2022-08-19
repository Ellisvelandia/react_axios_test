import React from "react";
import { render } from "@testing-library/react";
import Main from "../components/Main";



let button;
before
test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});

test("render component", () => {
  const { getByTestId } = render(<Main />);
  const button = getByTestId("toggle");

  expect(button).toBeDefined();
});


