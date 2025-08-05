import React from "react"
import SamplePage from "./Pages/SamplePage"
import Samplecard from "./Pages/Samplecard"
import VAccordionDemo from "./Pages/VAccordionDemo"
import VControlledAccordionDemo from "./Pages/VControlledAcoordionDemo"
import "./App.css"
import VTabs from "./Components/VTabs"
function App() {
  return (
    <div className="App">
      <SamplePage />
      <Samplecard />
      <VAccordionDemo />
      <VControlledAccordionDemo />
      <VTabs />
    </div>
  )
}

export default App
