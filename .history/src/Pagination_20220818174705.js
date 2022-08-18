import React from 'react'

export default function Pagination ({gotoNextPage, gotoPrevPage}) {
  return ( 
  <div>
    <button onClick={gotoPrevPage}>Previous</button>
    <button onClick={gotoNextPage}>Previous</button>
    </div>
  )
}
