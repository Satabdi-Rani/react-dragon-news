import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default routes;