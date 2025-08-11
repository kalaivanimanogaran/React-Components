import React from "react"
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Switch,
} from "@mui/material"

const VUiControlCard = ({ title, controls, actions, sx = {} }) => {
  return (
    <Card sx={{ width: 260, borderRadius: 2, boxShadow: 3, ...sx }}>
      <CardContent>
        {title && (
          <Typography variant="h6" sx={{ mb: 1 }}>
            {title}
          </Typography>
        )}

        {controls &&
          controls.map((control, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Switch checked={control.enabled} onChange={control.onToggle} />
              <Typography variant="body2">{control.label}</Typography>
            </div>
          ))}
      </CardContent>

      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  )
}

export default VUiControlCard
