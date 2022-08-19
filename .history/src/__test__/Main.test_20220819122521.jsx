import React from 'react'
import {render} from '@testing-library/react'
import Main from "../components/Main"
afterEach(cleanup);

test("fetches and displays data", async () => {
  const url = "/greeting";
  const {getByTextId}  = render(<axios url={url}/>);

  expect(getByTextId('loading')).toHaveTextContent()
});