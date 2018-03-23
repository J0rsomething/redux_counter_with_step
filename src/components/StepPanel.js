import React from 'react'

const StepPanel = ({step, addStep, minusStep}) => (
  <div>
    <span> Step is: {step} </span>
    <button onClick={addStep}>ADD_STEP</button>
    <button onClick={minusStep}>MINUS_STEP</button>
  </div>
)
export default StepPanel
