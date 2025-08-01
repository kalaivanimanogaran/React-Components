import React from "react"
import VAccordion from "../components/VAccordion"

const VAccordionDemo = () => {
  return (
    <div style={{ width: "400px", margin: "30px " }}>
      <h2 style={{ color: "#585858ff " }}>Accordion Components</h2>

      <VAccordion title="Q1: What is Accordion?">
        <p>
          An Accordion in React is a UI component that lets you show and hide
          sections of content by expanding or collapsing panels. It helps
          organize large content in a compact, interactive way.
        </p>
      </VAccordion>

      <VAccordion title="Q2: what is props in react?" defaultOpen={true}>
        <p>
          Props in React are read-only properties used to pass data from a
          parent component to a child component. They make components reusable
          and dynamic by allowing different data to be displayed.
        </p>
      </VAccordion>

      <VAccordion title="Q3: Why should we use Accordion?">
        <p>
          Accordion helps organize large content into sections, improving
          readability and user experience on your page.
        </p>
      </VAccordion>
    </div>
  )
}

export default VAccordionDemo
