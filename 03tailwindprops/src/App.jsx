import { useState } from "react"
// import "./App.css"
import Cards from "./components/cards"

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "abhinav",
    age: 21
  }
  let newarr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center mb-4">tailwind test</h1>
      <Cards username="chai aur code" someobj={newarr} btntxt='abhi' />
      <Cards username='abhinav'/>
    </>
  )
}

export default App