// SampleTabs.tsx
import React from "react"
import VTabs from "../Components/VTabs"
 import HomeIcon from "@mui/icons-material/Home"
 import FavoriteIcon from "@mui/icons-material/Favorite"
 import PersonPinIcon from "@mui/icons-material/PersonPin"

const SampleTabs: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <VTabs
        orientation="horizontal"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        selectionFollowsFocus
        textColor="secondary"
        indicatorColor="secondary"
        initialIndex={0}
        tabs={[
          {
            id: "home-tab",
            label: "Home",
            icon: <HomeIcon />,
            content: <div>This is the Home tab content.</div>,
          },
          {
            id: "favorites-tab",
            label: "Favorites",
            icon: <FavoriteIcon />,
            iconPosition: "start",
            wrapped: true,
            content: <div>Your favorite items appear here.</div>,
          },
          {
            id: "nearby-tab",
            label: "Nearby",
            icon: <PersonPinIcon />,
            iconPosition: "bottom",
            content: <div>Nearby people or events will be shown here.</div>,
          },
          {
            id: "disabled-tab",
            label: "Disabled",
            disabled: true,
            content: <div>This tab is disabled.</div>,
          },
        ]}
      />
    </div>
  )
}

export default SampleTabs
