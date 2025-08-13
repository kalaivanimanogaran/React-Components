import React from "react"
import VControlledAccordion from "../Components/VControlledAccordion"

const VControlledAccordionDemo = () => {
  const accordionItems = [
    {
      id: "panel1",
      title: "General settings",
      subText: "Basic configuration tips",
      content: (
        <div>
          <p>
            Adjust your app's default language, theme preferences, and
            notification settings here. These settings help personalize your
            experience and can be changed anytime.
          </p>
          <ul>
            <li>Set your preferred language</li>
            <li>Enable/disable push notifications</li>
            <li>Choose light or dark theme</li>
          </ul>
        </div>
      ),
    },
    {
      id: "panel2",
      title: "Users",
      subText: "Manage team members",
      content: (
        <div>
          <p>
            View and manage all registered users on your platform. Assign roles
            such as Admin, Editor, or Viewer and revoke access when necessary.
          </p>
          <ul>
            <li>Add or remove team members</li>
            <li>Assign user permissions</li>
            <li>View login history</li>
          </ul>
        </div>
      ),
    },
    {
      id: "panel3",
      title: "Advanced settings",
      subText: "Control security and data options",
      content: (
        <div>
          <p>
            These settings are recommended for advanced users. Make sure you
            understand the impact before enabling/disabling options.
          </p>
          <ul>
            <li>Enable data encryption for secure storage</li>
            <li>Manage API keys and integrations</li>
            <li>Control server-level filtering and firewall rules</li>
          </ul>
        </div>
      ),
    },
    {
      id: "panel4",
      title: "Personal data",
      subText: "Privacy and account management",
      content: (
        <div>
          <p>
            Download your personal data, request account deletion, or update
            your profile information. We value your privacy and give you full
            control of your data.
          </p>
          <ul>
            <li>Export all your stored data</li>
            <li>Update your name, email, and password</li>
            <li>Request account deletion</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div>
      <h2 style={{ marginLeft: "30px", color: "#585858ff" }}>
        Account & App Settings
      </h2>
      <VControlledAccordion items={accordionItems} />
    </div>
  )
}

export default VControlledAccordionDemo
