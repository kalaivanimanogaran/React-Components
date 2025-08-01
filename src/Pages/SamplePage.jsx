import React from "react"
import VDataTable from "../Components/VDataTable"
import { Box, Typography } from "@mui/material"

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "age", headerName: "Age", width: 90 },
  { field: "phone", headerName: "Phone Number", width: 150 },
]

const rows = [
  {
    id: 1,
    name: "Kalai",
    email: "kalai@gmail.com",
    age: 23,
    phone: 8798656799,
  },
  {
    id: 2,
    name: "Nandhini",
    email: "nandhini@gmail.com",
    age: 22,
    phone: 7969586399,
  },
  {
    id: 3,
    name: "Meena",
    email: "meena@gmail.com",
    age: 28,
    phone: 9865679987,
  },
  {
    id: 4,
    name: "Geetha",
    email: "geetha@gmail.com",
    age: 26,
    phone: 8656799768,
  },
  { id: 5, name: "Yoga", email: "yoga@gmail.com", age: 25, phone: 6567997639 },
  {
    id: 6,
    name: "Priya",
    email: "priya@gmail.com",
    age: 24,
    phone: 9876543210,
  },
  { id: 7, name: "Ravi", email: "ravi@gmail.com", age: 29, phone: 9876567890 },
]

const SamplePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        User Table
      </Typography>
      <VDataTable rows={rows} columns={columns} />
    </Box>
  )
}

export default SamplePage
