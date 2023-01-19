import React from "react"

import { Outlet } from "react-router-dom"

import { Footer, Header } from "./components"

function App(): JSX.Element {
  return (
    <div
      className="grid min-h-screen"
      style={{
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
