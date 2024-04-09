import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Create from './components/Create/Create.jsx'
import Show from './components/Show/Show.jsx'
import Edit from './components/Edit/Edit.jsx'
// import {Home,Create,Show,Edit} from './components/index.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"create",
        element:<Create/>
      },
      {
        path:"show/:id",
        element:<Show />
      },
      {
        path:"Edit",
        element:<Edit/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <RouterProvider router={router} />
  // </React.StrictMode>,
)
