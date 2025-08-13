// SamplePage.js
import React from "react"
import VDataTable from "../Components/VDataTable"
import { Box, Typography } from "@mui/material"

const columnDefs = [
  {
    headerName: "ID",
    field: "id",
    width: 90,
    filter: "agNumberColumnFilter",
    sortable: true,
  },
  {
    headerName: "Name",
    field: "name",
    width: 150,
    filter: "agTextColumnFilter",
    sortable: true,
  },
  {
    headerName: "Email",
    field: "email",
    width: 200,
    filter: "agTextColumnFilter",
    sortable: true,
  },
  {
    headerName: "Age",
    field: "age",
    width: 100,
    filter: "agNumberColumnFilter",
    sortable: true,
    valueFormatter: (params) => `${params.value} yrs`,
  },
  {
    headerName: "Phone Number",
    field: "phone",
    width: 180,
    filter: "agTextColumnFilter",
    sortable: true,
    valueFormatter: (params) => {
      if (!params.value) return ""
      const phoneStr = params.value.toString()
      return `${phoneStr.slice(0, 4)} ${phoneStr.slice(4, 7)} ${phoneStr.slice(
        7
      )}`
    },
  },
  {
    headerName: "Price",
    field: "price",
    width: 150,
    filter: "agNumberColumnFilter",
    sortable: true,
    valueFormatter: (params) => {
      if (params.value == null) return ""
      return `£${params.value.toLocaleString()}`
    },
  },
]

const rowData = [
  {
    id: 1,
    name: "Kalai",
    email: "kalai@gmail.com",
    age: 23,
    phone: 8798656799,
    price: 1020000,
  },
  {
    id: 2,
    name: "Nandhini",
    email: "nandhini@gmail.com",
    age: 22,
    phone: 7969586399,
    price: 23790000,
  },
  {
    id: 3,
    name: "Meena",
    email: "meena@gmail.com",
    age: 28,
    phone: 9865679987,
    price: 12120000,
  },
  {
    id: 4,
    name: "Geetha",
    email: "geetha@gmail.com",
    age: 26,
    phone: 8656799768,
    price: 17810000,
  },
  {
    id: 5,
    name: "Yoga",
    email: "yoga@gmail.com",
    age: 25,
    phone: 6567997639,
    price: 1480000,
  },
  {
    id: 6,
    name: "Priya",
    email: "priya@gmail.com",
    age: 24,
    phone: 9876543210,
    price: 15460000,
  },
  {
    id: 7,
    name: "Ravi",
    email: "ravi@gmail.com",
    age: 29,
    phone: 9876567890,
    price: 23600000,
  },
]

const SamplePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        User Table
      </Typography>
      <VDataTable rowData={rowData} columnDefs={columnDefs} />
    </Box>
  )
}

export default SamplePage
