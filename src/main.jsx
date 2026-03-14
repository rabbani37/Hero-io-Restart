import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './layout/Root.jsx';
import Home from './pages/Home/Home.jsx';
import Apps from './pages/Apps/Apps.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/apps",
        element: <Apps></Apps>
      },
      {
        path: "/installation",
        element: <Apps></Apps>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>,
)
