import React, { useState } from "react"
import Pagination from "@mui/material/Pagination"

const SamplePagination = () => {
  const [page, setPage] = useState(1)

  const handlePageChange = (event, value) => {
    setPage(value)
    console.log("Current Page:", value)
  }

  return (
    <div>
      <h2>Users</h2>
      {/* Your table or list here */}
      <Pagination
        page={page}
        count={10} // total pages
        onChange={handlePageChange}
        size="large"
        color="secondary"
      />
    </div>
  )
}

export default SamplePagination
