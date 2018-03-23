import React from 'react'

const Counter = ({counter, step, onAdd, onMinus,addStep, minusStep}) => (
  <div className='counter_container'>
    <h1 className='counter_digit'>{counter}</h1>
    <span style={{fontSize: '20px',fontFamily: 'fantasy'}}>Step is: {step} </span>
    <div className='counter_button_group'>
      <button onClick={addStep}>++</button>
      <button onClick={onAdd}>+</button>
      <button onClick={onMinus}>-</button>
      <button onClick={minusStep}>--</button>
    </div>
  </div>
)

export default Counter
