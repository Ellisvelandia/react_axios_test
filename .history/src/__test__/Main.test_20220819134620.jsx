import React from "react";
import { render } from "@testing-library/react";
import Main from "../components/Main";



let button;
beforeEach(() => {
  render(<Main/>)
})
test("render component", () => {


  expect(main).toBeDefined();
});

test("render component", () => {
  const { getByTestId } = render(<Main />);
  const button = getByTestId("toggle");

  expect(button).toBeDefined();
});

