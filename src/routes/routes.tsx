import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Explorar } from "../pages/Explorar";

export const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/explorar",
        element: <Explorar />,
    },
]);
