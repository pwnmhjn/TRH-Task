// import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  PageNotFound,
  Create,
  Show,
  Edit,
  Home,
  SignUp,
  LogIn,
} from "./Pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "show/:id",
        element: <Show />,
      },
      {
        path: "show/:id/edit",
        element: <Edit />,
      },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <LogIn /> },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
