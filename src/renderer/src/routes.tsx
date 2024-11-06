import { Navigate, RouteObject } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout"
import ErrorPage from "./Pages/error/ErrorPage"
import NotFoundPage from "./Pages/not-found/NotFoundPage"
import HomePage from "./Pages/home/HomePage"
import Dashboard from "./Pages/dashboard/Dashboard"



export const routes: RouteObject[] = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Navigate to="/home" replace />,
            },
            {
              path: "home",
              element: <HomePage />,
            },
            {
              path: "dashboard",
              element: <Dashboard/>,
            },
            { path: "*", element: <NotFoundPage /> },
          ],
        },
      ],
    },
  ]
  