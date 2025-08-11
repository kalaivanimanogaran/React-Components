import React from "react"
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material"

const VMediaCard = ({
  title,
  subtitle,
  image,
  content,
  actions,
  mediaHeight = 140,
  sx = {},
}) => {
  return (
    <Card sx={{ width: 280, borderRadius: 2, boxShadow: 3, ...sx }}>
      {image && (
        <CardMedia
          component="img"
          height={mediaHeight}
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        {title && <Typography variant="h6">{title}</Typography>}
        {subtitle && (
          <Typography variant="subtitle2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
        {content}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  )
}

export default VMediaCard
