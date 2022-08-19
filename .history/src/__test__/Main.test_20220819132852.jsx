import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Main from "../components/Main";



test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});

it('user click button', () => {
  expect(buttono.find(ReactMardown)).toHaveLength(0);

  buttono.find('toggle').simulate('click');

  expect(buttono.find(ReactMardown)).toHaveLength(1);
});

