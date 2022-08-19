import React from "react";
import { act } from "react-dom/test-utils";
import { render,unmountComponentAtNode  } from "@testing-library/react";
import Main from "../components/Main";



test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});

