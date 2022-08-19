import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Main from "../components/Main";



test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});


test("toggle button works"), () => {
  const {getByTestId} = render (<Main />)
  const button = getByTestId("toggle")
  fireEvent.click(button);
  expect (getByTestId("detail")).toBeTheDocument();
}

