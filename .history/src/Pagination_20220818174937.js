import React from 'react'

export default function Pagination ({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && </div>button onClick={gotoNextPage}>Next</gotoPrevPage>  
      {gotoPrevPage && </div>button onClick={gotoPrevPage}>Previous</gotoPrevP  age>
    </div>
  )
}
