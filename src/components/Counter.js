import React from 'react'

const Counter = ({counter, onAdd, onMinus}) => (
  <div>
    {console.log(counter)}
    <h1>{counter}</h1>
    <button onClick={onAdd}>ADD</button>
    <button onClick={onMinus}>MINUS</button>
  </div>
)

export default Counter
