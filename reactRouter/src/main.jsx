import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Layout from "./Layout.jsx"
import "./index.css"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { About, Contact, Github, Home, User } from "./components/index.js"
import { githubLoader } from "./components/Github/Github.jsx"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         loader: { githubLoader },
//         path: "github",
//         element: <Github />,
//       },
//       {
//         path: "user/:userid",
//         element: <User />,
//       },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubLoader} path="github" element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)