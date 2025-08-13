import React, { useState } from "react"
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import TextField from "@mui/material/TextField"
import dayjs from "dayjs"

const VTimePicker = ({ label = "Select Time", value, onChange }) => {
  const [selectedTime, setSelectedTime] = useState(value || dayjs())

  const handleChange = (newValue) => {
    setSelectedTime(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div style={{ marginLeft: "20px" }}>
      <h2 style={{ marginBottom: "10px", marginLeft: "20px" }}>Time Picker:</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label={label}
          value={selectedTime}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </div>
  )
}

export default VTimePicker
