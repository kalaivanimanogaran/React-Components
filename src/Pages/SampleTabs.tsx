// SampleTabs.tsx
import React from "react"
import VTabs from "../Components/VTabs"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

const SampleTabs: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      
      {/* First Tab Group → Items only */}
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
            id: "item-one",
            label: "Item-One",
           
          },
          {
            id: "item-two",
            label: "Item-Two",
           
          },
          {
            id: "item-three",
            label: "Item-Three",
            
          },
        ]}
      />

      <div style={{ margin: "30px 0" }} /> 

      {/* Second Tab Group → Home/About/Contact */}
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
            icon: <HomeOutlinedIcon />,
            content: <div>This is the Home tab content.</div>,
          },
          {
            id: "about-tab",
            label: "About",
            icon: <PersonOutlineIcon />,
            content: <div>This is the About tab content.</div>,
          },
          {
            id: "contact-tab",
            label: "Contact",
            icon: <AddIcCallOutlinedIcon />,
            content: <div>This is the Contact tab content.</div>,
          },
        ]}
      />

      <div style={{ margin: "30px 0" }} /> 

      {/* Third Tab Group → Item 1 to Item 8 Scrollable */}
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
            id: "item1",
            label: "Item-1",
            
          },
          {
            id: "item2",
            label: "Item-2",
            
          },
          {
            id: "item3",
            label: "Item-3",
           
          },
          {
            id: "item4",
            label: "Item-4",
           
          },
          {
            id: "item5",
            label: "Item-5",
         
          },
          {
            id: "item6",
            label: "Item-6",
           
          },

           {
            id: "item7",
            label: "Item-7",
          
          },
            {
            id: "item8",
            label: "Item-8",
            
          },
        ]}
      />
    </div>
  )
}

export default SampleTabs
