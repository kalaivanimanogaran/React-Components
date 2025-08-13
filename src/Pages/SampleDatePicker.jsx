import React, { useState } from "react"
import VDatePicker from "../Components/VDatePicker"
import dayjs from "dayjs"

const SampleDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue)
    console.log(
      "Selected Date:",
      newValue ? newValue.format("DD/MM/YYYY") : null
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ margin: 20 }}>Date Picker:</h2>
      <VDatePicker
        label="Event Date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p>
        Chosen Date: {selectedDate ? selectedDate.format("DD/MM/YYYY") : "None"}
      </p>
    </div>
  )
}

export default SampleDatePicker
