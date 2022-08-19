import React from 'react'
import {render} from '@testing-library/react'
import"@testing-library/jest-dom"
import { axios } from "axios";

afterEach(cleanup);

it ("fetches and displays data", async () => {
  const url = "/greeting";
  const {getByText}  = render(<axios url={url}/>);
})