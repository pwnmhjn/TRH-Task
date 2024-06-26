import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Create from "./components/Create/Create.jsx";
import Show from "./components/Show/Show.jsx";
import Edit from "./components/Edit/Edit.jsx";
import SignUp from "./components/SingUp/SignUp.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import PageNotFound from "./components/Reusables/PageNotFound.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
