import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  // let counter = 15
  const addvalue = () => {
    // console.log("value added", Math.random());
    // counter = (counter + 1)
    // setcounter(counter)
    setcounter(prevcounter => prevcounter + 1)
    setcounter(prevcounter => prevcounter + 1)
    setcounter(prevcounter => prevcounter + 1)
    setcounter(prevcounter => prevcounter + 1)
      
    // console.log("clicked", counter);
  }
  const removevalue = () => {
    setcounter(counter - 1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
