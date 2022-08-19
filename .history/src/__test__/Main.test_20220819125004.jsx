import React from "react";
import { act } from "react-dom/test-utils";
import { render,unmountComponentAtNode  } from "@testing-library/react";
import Main from "../components/Main";


let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});

