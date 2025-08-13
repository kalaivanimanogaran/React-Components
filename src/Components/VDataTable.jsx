// VDataTable.js
import React from "react"
import { AgGridReact } from "ag-grid-react"
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community"

import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { Box } from "@mui/material"

// Register modules once in your app
ModuleRegistry.registerModules([AllCommunityModule])

const VDataTable = ({ rowData, columnDefs, pageSize = 5, loading = false }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {/* // Inline style overrides for AG Grid
      <style>
        {`
          .ag-theme-alpine .ag-header-cell {
            padding-left: 8px;
            padding-right: 8px;
            display: flex;
            align-items: center;
          }
          .ag-theme-alpine .ag-header-cell-menu-button {
            margin-left: 6px;
          }
          .ag-theme-alpine .ag-filter {
            margin-top: px;
          }
        `}
      </style> */}
      <div
        className="ag-theme-alpine"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={pageSize}
          animateRows={true}
          defaultColDef={{
            resizable: true,
            filter: true, // enables filter icon in header
            sortable: true,
          }}
          overlayLoadingTemplate={
            '<span class="ag-overlay-loading-center">Loading...</span>'
          }
          loadingOverlayComponent={loading ? "customLoadingOverlay" : null}
        />
      </div>
    </Box>
  )
}

export default VDataTable
