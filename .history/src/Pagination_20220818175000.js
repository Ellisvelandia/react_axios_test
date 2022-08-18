import React from 'react'

export default function Pagination ({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <divbutton onClick={gotoNextPage}>Next</gotoPrevPage>}
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</gotoPrevPage>}
    </div>
  )
}
