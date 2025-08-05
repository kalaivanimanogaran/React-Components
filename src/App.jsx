import React from "react"
import SamplePage from "./Pages/SamplePage"
import Samplecard from "./Pages/Samplecard"
import VAccordionDemo from "./Pages/VAccordionDemo"
import VControlledAccordionDemo from "./Pages/VControlledAcoordionDemo"
import "./App.css"
import SampleTabs from "./Pages/SampleTabs"
function App() {
  return (
    <div className="App">
      <SamplePage />
      <Samplecard />
      <VAccordionDemo />
      <VControlledAccordionDemo />
      <SampleTabs />
    </div>
  )
}

export default App
