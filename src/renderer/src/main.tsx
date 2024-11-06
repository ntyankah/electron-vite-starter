import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { routes } from "./routes"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
// import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={createMemoryRouter(routes)} />
  </React.StrictMode>
)
