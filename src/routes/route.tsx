import App from "@/App";
import Takes from "@/pages/takes";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
        {
            path : "/",
            element : <Takes></Takes>
        },
        {
            path : "/users",
            element : <Users></Users>
        }
    ]
  },
]);

export default routes;