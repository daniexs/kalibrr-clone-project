import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { delJob, fecthJobs } from "../store/actions"

function TableJobs(){
    const jobs = useSelector(state => state.jobs.data)
    const dispatch = useDispatch()

    function deleteJob(id){
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
                dispatch(delJob(id))
            }
        })
    }

    useEffect(() => {
        dispatch(fecthJobs())
    }, [])
    
    return (
        <>
        <h1 style={{textAlign:"center", marginBottom: '10px'}}>Jobs List</h1>
        <Link to="/add-jobs" className="btn btn-success mb-3">Add Job</Link>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Author</th>
                <th scope="col">JobType</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            { jobs.map((el,index)=>{
                    return (
                        <tr key={el.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{el.title}</td>
                            <td>{el.description}</td>
                            <td>{el.authorId}</td>
                            <td>{el.jobType}</td>
                            <td style={{gap: '5px', display: "flex"}}>
                                <Link to={'/edit-job/'+ el.id} className="btn btn-warning">Edit</Link>
                                <button className="btn btn-danger" onClick={()=> deleteJob(el.id)} >Delete</button>
                            </td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
        </>
    )
}
export default TableJobs