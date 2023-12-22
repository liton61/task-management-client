import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddNewTask from "../pages/Dashboard/AddNewTask";
import PreviousTask from "../pages/Dashboard/PreviousTask";
// import AllUsers from "../pages/Dashboard/AllUsers";
import UpdateTask from "../pages/Dashboard/UpdateTask";
import DeveloperSection from "../components/UserTypesSection/DeveloperSection";
import CorporateProfessionalsSection from "../components/UserTypesSection/CorporateProfessionalsSection";
import BankerSection from "../components/UserTypesSection/BankerSection";


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
                path: "/developer",
                element: <DeveloperSection></DeveloperSection>
            },
            {
                path: "/corporate",
                element: <CorporateProfessionalsSection></CorporateProfessionalsSection>
            },
            {
                path: "/banker",
                element: <BankerSection></BankerSection>
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
                path: "updateTask/:id",
                element: <UpdateTask></UpdateTask>,
                loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`)
            },
            // {
            //     path: "allUsers",
            //     element: <AllUsers></AllUsers>
            // }
        ]
    },
]);

export default router;