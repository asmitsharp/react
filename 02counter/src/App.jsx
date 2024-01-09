import "./App.css"
import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 5

  function addValue() {
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    } else {
      alert("Reached the max point")
    }
  }

  function removeValue() {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    } else {
      alert("Reached min point")
    }
  }

  return (
    <>
      <h1>chai</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
