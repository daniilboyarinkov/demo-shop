import React from "react"

import "./styles/index.css"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"

import { store } from "./app/store"
import { JSXrouter } from "./router"

const container = document.getElementById("root")
if (!container) throw new Error("Could not find root element with id 'root'")
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <RouterProvider router={JSXrouter} />
  </Provider>
)
