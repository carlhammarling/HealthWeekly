import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout/RootLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: 'menu',
          element: <Products />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App