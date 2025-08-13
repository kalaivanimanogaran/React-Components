import React from "react"
import { Rating } from "@mui/material"

const VRating = ({
  value = 0,
  onChange,
  precision = 1,
  readOnly = false,
  size = "medium",
  max = 5,
  ...props
}) => {
  return (
    <Rating
      value={value}
      onChange={onChange}
      precision={precision}
      readOnly={readOnly}
      size={size}
      max={max}
      {...props}
    />
  )
}

export default VRating
