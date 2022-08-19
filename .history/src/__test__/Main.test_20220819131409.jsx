import React from "react";
import { render } from "@testing-library/react";
import Main from "../components/Main";



test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});
test("toggle button works"), () => {
  const {getByTestId, queryByTestId} = render (<Main/>)
  const button = getByTestId
}

