import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { delCompany, fetchCompany } from "../store/actions"

function TableCompany(){
    const companies = useSelector(state => state.companies.data)
    const dispatch = useDispatch()

    function deleCompany(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(delCompany(id))
            }
        })
    }

    useEffect(() => {
      dispatch(fetchCompany())
    }, [])
    
    return (
        <>
        <h1 style={{textAlign:"center", marginBottom: '10px'}}>Companies List</h1>
        <Link to="/add-company" className="btn btn-success mb-3">Add Company</Link>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">Email</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            { companies.map((el,index)=>{
                    return (
                        <tr key={el.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{el.name}</td>
                            <td>{el.location}</td>
                            <td>{el.email}</td>
                            <td>{el.description}</td>
                            <td style={{gap: '5px', display: "flex"}}>
                                <Link to={'/edit-company/' + el.id} className="btn btn-warning" >Edit</Link>
                                <button className="btn btn-danger" onClick={()=>deleCompany(el.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
        </>
    )
}
export default TableCompany