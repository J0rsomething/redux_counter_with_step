import React, { Component } from 'react'
import CounterContainer from '../containers/CounterContainer'
import './styles/App.scss'
const App = () => (
  <div className='background'>
    <h1 className='title'>Counter</h1>
    <div className='panel'>
      <CounterContainer/>
    </div>
  </div>
)
export default App;
