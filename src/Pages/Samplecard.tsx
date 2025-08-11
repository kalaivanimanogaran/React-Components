import React from "react"
import VCard from "../Components/VCard"
import VMediaCard from "../Components/VMediaCard"
import VUiControlCard from "../Components/VUiControlCard"
import { Button, Divider } from "@mui/material"

const Samplecard: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {/* Normal Card */}
      <VCard
        title="User Info"
        subtitle="Profile Details"
        actions={<Button size="small">Edit</Button>}
      >
        <p>Name: indhu</p>
        <p>Role: Developer</p>
        <Divider sx={{ my: 1 }} />
        <p>Summary: Passionate about React and UI design.</p>
      </VCard>

      {/* Media Card */}
      <VMediaCard
        title="Event"
        subtitle="Chennai, Aug 30"
        image="https://tse1.mm.bing.net/th/id/OIP.em-Fv-Tbhwsp6lmdCXesgAHaEK?pid=Api&rs=1&c=1&qlt=95&w=213&h=120"
        content={<p>Join the React Bootcamp!</p>}
        actions={
          <>
            <Button size="small">Share</Button>
            <Button size="small">Register</Button>
          </>
        }
      />

      {/* UI Control Card */}
      <VUiControlCard
        title="Preferences"
        controls={[
          {
            label: "Enable Auto Backup",
            enabled: true,
            onToggle: () => console.log("Auto Backup toggled"),
          },
          {
            label: "Show Hints",
            enabled: false,
            onToggle: () => console.log("Show Hints toggled"),
          },
          {
            label: "Use Compact Layout",
            enabled: true,
            onToggle: () => console.log("Compact Layout toggled"),
          },
        ]}
        actions={<Button size="small">Apply</Button>}
      />
    </div>
  )
}

export default Samplecard
