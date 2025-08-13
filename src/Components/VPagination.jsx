import React from "react"
import { Pagination, Stack } from "@mui/material"

const VPagination = ({
  page,
  count,
  onChange,
  size = "medium",
  color = "primary",
}) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        page={page}
        count={count}
        onChange={onChange}
        size={size}
        color={color}
        shape="rounded"
        showFirstButton
        showLastButton
      />
    </Stack>
  )
}

export default VPagination
