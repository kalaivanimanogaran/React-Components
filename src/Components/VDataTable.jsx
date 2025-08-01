import { DataGrid } from "@mui/x-data-grid"
import { Box } from "@mui/material"

const VDataTable = ({ rows, columns, pageSize = 5, loading = false }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        loading={loading}
      />
    </Box>
  )
}

export default VDataTable
