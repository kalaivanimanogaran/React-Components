// VTabs.tsx
import React from "react"
import { Box, Tabs, Tab } from "@mui/material"

interface TabItem {
  id?: string
  label: string
  icon?: React.ReactNode
  iconPosition?: "top" | "bottom" | "start" | "end"
  wrapped?: boolean
  disabled?: boolean
  href?: string
  ariaLabel?: string
  content?: React.ReactNode
}

interface TabPanelProps {
  children: React.ReactNode
  value: number
  index: number
  id?: string
}

function TabPanel({ children, value, index, id }: TabPanelProps) {
  const tabId = id || `index-${index}`
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${tabId}`}
      aria-labelledby={`tab-${tabId}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  )
}

interface VTabsProps {
  orientation?: "horizontal" | "vertical"
  variant?: "standard" | "scrollable" | "fullWidth"
  scrollButtons?: "auto" | true | false
  allowScrollButtonsMobile?: boolean
  tabs: TabItem[]
  initialIndex?: number
  selectionFollowsFocus?: boolean
  textColor?: "inherit" | "primary" | "secondary"
  indicatorColor?: "primary" | "secondary"
}

const VTabs: React.FC<VTabsProps> = ({
  orientation = "horizontal",
  variant = "standard",
  scrollButtons = "auto",
  allowScrollButtonsMobile = false,
  tabs,
  initialIndex = 0,
  selectionFollowsFocus = false,
  textColor = "primary",
  indicatorColor = "primary",
}) => {
  const [value, setValue] = React.useState<number>(initialIndex)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        display: orientation === "vertical" ? "flex" : "block",
        borderRight: orientation === "vertical" ? 1 : 0,
        borderBottom: orientation === "horizontal" ? 1 : 0,
        borderColor: "divider",
        width: "100%",
      }}
    >
      <Tabs
        orientation={orientation}
        variant={variant}
        scrollButtons={variant === "scrollable" ? scrollButtons : undefined}
        allowScrollButtonsMobile={allowScrollButtonsMobile}
        value={value}
        onChange={handleChange}
        selectionFollowsFocus={selectionFollowsFocus}
        textColor={textColor}
        indicatorColor={indicatorColor}
        aria-label={`${orientation} tabs`}
        sx={{ minWidth: orientation === "vertical" ? 120 : "auto" }}
      >
        {tabs.map((tab, index) => {
          const tabId = tab.id || `index-${index}`
          return (
            <Tab
              key={tabId}
              id={`tab-${tabId}`}
              aria-controls={`tabpanel-${tabId}`}
              label={tab.label}
              icon={tab.icon}
              iconPosition={tab.iconPosition || "top"}
              wrapped={tab.wrapped}
              disabled={tab.disabled}
              href={tab.href}
              aria-label={tab.ariaLabel}
            />
          )
        })}
      </Tabs>

      {tabs.map((tab, index) => {
        const tabId = tab.id || `index-${index}`
        return (
          <TabPanel key={tabId} value={value} index={index} id={tabId}>
            {tab.content}
          </TabPanel>
        )
      })}
    </Box>
  )
}

export default VTabs
