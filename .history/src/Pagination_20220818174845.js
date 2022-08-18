import React from 'react'

export default function Pagination ({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      <button onClick={gotoNextPage}>Next</button>
      <button onClick={gotoPrevPage}>Previous</button>
    </div>
  )
}
