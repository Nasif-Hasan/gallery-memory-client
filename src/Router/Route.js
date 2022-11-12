import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyReview from "../Pages/Review/MyReview";
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
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/servicePage/:id',
                element: <SoloService></SoloService>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            {
                path: '/review/:id',
                element: <MyReview></MyReview>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
            // {
            //     
            //     loader: ({params}) => {
            //         return fetch(`http://localhost:5000/services/${params.id}`)
            //     }
            // }
        ]
    }
])

export default router