import React, { useState } from "react"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const VControlledAccordion = ({ items }) => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => {
    setExpanded((prev) => (prev === panel ? false : panel))
  }

  return (
    <div style={{ width: "500px", margin: "20px" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "10px",
            background: "#fff",
            boxShadow: "0 7px 4px rgba(0,0,0,0.05)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 16px",
              cursor: "pointer",
              background: "#fff",
            }}
            onClick={() => handleChange(item.id)}
          >
            {/* Left text - Title */}
            <span
              style={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {item.title}
            </span>

            {/* Middle text - Sub text */}
            <span
              style={{
                flexGrow: 1,
                color: "#777",
                fontSize: "14px",
              }}
            >
              {item.subText}
            </span>

            {/* Right - Dropdown icon */}
            <ArrowDropDownIcon
              style={{
                transform:
                  expanded === item.id ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>

          {/* Body */}
          <div
            style={{
              maxHeight: expanded === item.id ? "300px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div style={{ padding: "12px 16px", color: "#333" }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VControlledAccordion
