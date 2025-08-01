import React, { useState, useRef } from "react"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const VAccordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentRef = useRef(null)

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "10px",
        background: "#fff",
        boxShadow: "0 7px 4px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          cursor: "pointer",
          background: "#fff",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 style={{ margin: 0, fontSize: "16px", color: "#333" }}>{title}</h3>
        <ArrowDropDownIcon
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* Body */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div style={{ padding: "12px 16px", fontSize: "14px", color: "#333" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default VAccordion
