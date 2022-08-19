import React from "react";
import { render } from "@testing-library/react";
import Main from "../components/Main";
afterEach(cleanup);

test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});


let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});