import React from "react"

import { Outlet } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"

function App(): JSX.Element {
  return (
    <div
      className="min-h-screen"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
