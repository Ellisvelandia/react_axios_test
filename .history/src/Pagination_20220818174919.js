import React from 'react'

export default function Pagination ({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      gotoPrevPage && button onClick={gotoNextPage}>Next</gotoPrevPage>
      gotoPrevPage && button onClick={gotoPrevPage}>Previous</gotoPrevPage>
    </div>
  )
}
