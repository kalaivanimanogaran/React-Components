import React from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

const VDatePicker = ({
  label = "Select Date",
  value,
  onChange,
  format = "DD/MM/YYYY",
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        format={format}
        {...props}
      />
    </LocalizationProvider>
  )
}

export default VDatePicker
