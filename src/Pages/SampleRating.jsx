import React, { useState } from "react"
import VRating from "../Components/VRating"

const SampleRating = () => {
  const [rating, setRating] = useState(3)

  const handleRatingChange = (event, newValue) => {
    setRating(newValue)
    console.log("Selected Rating:", newValue)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Rate our product:</h2>
      <VRating
        value={rating}
        onChange={handleRatingChange}
        precision={0.5}
        size="large"
      />
      <p>Your Rating: {rating}</p>
    </div>
  )
}

export default SampleRating
