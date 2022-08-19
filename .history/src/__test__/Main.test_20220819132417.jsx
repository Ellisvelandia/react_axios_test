import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Main from "../components/Main";



test("render component", () => {
  const { getByTestId } = render(<Main />);
  const main = getByTestId("main");

  expect(main).toBeDefined();
});

const pokeFun = async () => {
  setLoading(true);
  const res = await axios.get(url);
  setNextUrl(res.data.next);
  setPrevUrl(res.data.previous);
  getPokemon(res.data.results);
  setLoading(false);
};

test("toggle button works"), () => {
  const {getByTestId} = render (<Main pokefun={pokefun}/>)
  const button = getByTestId("toggle")
  fireEvent.click(button);
  expect (queryByTestId("detail")).toBeTheDocument();
}

