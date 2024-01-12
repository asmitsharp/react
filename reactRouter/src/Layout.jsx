import React from "react"
import { Footer, Header } from "./components"
import { Outlet } from "react-router-dom"

function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default layout
