// import './App.css'

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from "./Layout.jsx";
import useLogin from "./utils/useLogin.js";
import { useNavigate } from "react-router-dom";
import {
  PageNotFound,
  Create,
  Show,
  Edit,
  Home,
  SignUp,
  LogIn,
  IndexHome,
} from "./Pages/index.js";

function App() {
  const isLogin = useLogin();

  // const isLogin = true;
  // console.log(isLogin);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <IndexHome />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "show/:id",
          element: isLogin ? <Show /> : <Navigate to="/" />,
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

  return <RouterProvider router={router} />;
}

export default App;
