 import React from "react"
 import SamplePage from "./Pages/SamplePage"
 import Samplecard from "./Pages/Samplecard"
 import VAccordionDemo from "./Pages/VAccordionDemo"
 import VControlledAccordionDemo from "./Pages/VControlledAccordionDemo"
 import "./App.css"
 import SampleTabs from "./Pages/SampleTabs"
import SamplePagination from "./Pages/SamplePagination"
import SampleRating from "./Pages/SampleRating"
import SampleDatePicker from "./Pages/SampleDatePicker"
import VTimePicker from "./Components/VTimePicker"

function App() {
  return (
    <div className="App">
       <SamplePage />
       <Samplecard />
       <VAccordionDemo />
       <VControlledAccordionDemo />
       <SampleTabs />
      <SamplePagination/>
      <SampleRating/>
      <SampleDatePicker/>
      <VTimePicker/>
    </div>
  )
}

export default App
