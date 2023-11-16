import App from "./App"

import {createBrowserRouter, redirect} from 'react-router-dom'
import LoginPage from "./Pages/LoginPage"
import DashboardPage from "./Pages/Dashboard"
import TableJobs from "./Pages/TableJobs"
import TableCompany from "./Pages/TableCompany"
import FormComapany from "./Pages/FormAdd"
import FormJobs from "./Pages/FormAddJobs"
import FormAdmin from "./Pages/FormAddAdmin"
import FormEditComapany from "./Pages/FormEditCompany"
import FormEditJobs from "./Pages/FormEditJobs"

function authentication(){
    if(!localStorage.access_token){
        return redirect('/login')
    }else{
        return null
    }
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        loader: authentication,
        children: [
            {
                path: '',
                element: <DashboardPage/>
            },
            {
                path: '/jobs',
                element: <TableJobs/>
            },
            {
                path: '/company',
                element: <TableCompany/>,
                // children: [
                //     {
                //         path: '/add',
                //         element: <FormComapany/>
                //     }
                // ]
            },
            {
                path: '/add-company',
                element: <FormComapany/>
            },
            {
                path: '/add-jobs',
                element: <FormJobs/>
            },
            {
                path: '/add-admin',
                element: <FormAdmin/>
            },
            {
                path: '/edit-company/:id',
                element: <FormEditComapany/>
            },
            {
                path: '/edit-job/:id',
                element: <FormEditJobs/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>,
        loader: ()=>{
            if(localStorage.access_token){
                return redirect('/')
            }else{
                return null
            }
        }
    }
    

])

export default router