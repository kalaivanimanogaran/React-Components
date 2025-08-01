import React from "react"
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
} from "@mui/material"
const VCard = ({ title, subtitle, children, actions, sx = {} }) => {
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      <CardContent sx={{ p: 2 }}>
        {/* Title */}
        {title && (
          <Typography variant="h6" sx={{ mb: 1 }}>
            {title}
          </Typography>
        )}

        {/* Subtitle */}
        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {subtitle}
          </Typography>
        )}

        {/* Divider to separate header and children */}
        <Divider sx={{ mb: 1 }} />

        {/* Main content */}
        {children}
      </CardContent>

      {/* Actions at the bottom */}
      {actions && <CardActions sx={{ p: 1 }}>{actions}</CardActions>}
    </Card>
  )
}

export default VCard
