import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

function MyApp() {
  return (
    <div>
      <h1>react custom APP</h1>
    </div>
  )
}

/*
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google.",
}
*/

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "visit google.com",
  anotherUser // evaluated Expressions
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // <MyApp />
  //  MyApp()
  reactElement
)
