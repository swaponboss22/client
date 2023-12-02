import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import AuthProvider from "./providers/AuthProvider.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateArticle from "./pages/CreateArticle.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path:'/sign-up',
                element: <SignUp></SignUp>
            },{
                path:'/sign-in',
                element: <Login></Login>
            },
            {
                path:'/create-article',
                element: <CreateArticle></CreateArticle>
            }
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
