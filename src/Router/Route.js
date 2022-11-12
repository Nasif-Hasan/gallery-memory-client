import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ServicePage from "../Pages/ServicePage/ServicePage";
import SoloService from "../Pages/ServicePage/SoloService";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('service.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/servicePage',
                element: <ServicePage></ServicePage>,
                loader: () => fetch('service.json')
            },
            {
                path: '/servicePage/:_id',
                element: <SoloService></SoloService>,
                loader: ({params}) => {
                    return fetch(`service.json/${params}`)
                }
            }
        ]
    }
])

export default router