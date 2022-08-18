import React from 'react'

export default function Pagination ({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoNextPage}>Next</button>}
      {gotoNextPage && <button onClick={gotoPrevPage}>Previous</button>}
    </div>
  )
}