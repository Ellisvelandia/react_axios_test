import React from 'react'

export default function Pagination ({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      <gotoPrevPage  button onClick={gotoNextPage}>Next</gotoPrev>
      <gotoPrevPage  button onClick={gotoPrevPage}>Previous</gotoPrev>
    </div>
  )
}
