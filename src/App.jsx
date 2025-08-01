import React from "react"
import SamplePage from "./Pages/SamplePage"
import Samplecard from "./Pages/Samplecard"
import VAccordionDemo from "./Pages/VAccordionDemo"
import VControlledAccordionDemo from "./Pages/VControlledAcoordionDemo"
import "./App.css"

function App() {
  return (
    <div className="App">
      <SamplePage />
      <Samplecard />
      <VAccordionDemo />
      <VControlledAccordionDemo />
    </div>
  )
}

export default App
