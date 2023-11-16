import LandingPage from "./pages/LandingPage";
import App from "./App"
import {createBrowserRouter} from "react-router-dom"
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/> ,
        children: [
            {
                path: '',
                element: <LandingPage/>
            },
            {
                path: 'detail/:id',
                element: <DetailPage/>
            }
        ]
    }
])

export default router