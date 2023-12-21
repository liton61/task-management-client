import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Tasks from "../pages/Tasks/Tasks";
import Projects from "../pages/Projects/Projects";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddNewTask from "../pages/Dashboard/AddNewTask";
import PreviousTask from "../pages/Dashboard/PreviousTask";
import AllUsers from "../pages/Dashboard/AllUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/tasks",
                element: <Tasks></Tasks>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "addNewTask",
                element: <AddNewTask></AddNewTask>
            },
            {
                path: "previousTask",
                element: <PreviousTask></PreviousTask>
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            }
        ]
    },
]);

export default router;