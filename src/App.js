import React from 'react'
import { Counter } from './components/Counter/Counter'
import './App.css'
import List from './components/List/List'

function App() {
  return (
    <div className='app'>
      <Counter />
      <List />
    </div>
  )
}

export default App
