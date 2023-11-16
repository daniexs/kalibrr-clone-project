import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { fetchCompany, getJob, postJob, putJob } from "../store/actions"

function FormEditJobs(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    
    const [jobsForm, setJobsForm] = useState({
        title: '',
        description: '',
        companyId: '',
        jobType: '',
        skills: [
            {
                name: "belum ada",
                level: 'belum ada'
            }
        ]

    })

    async function postJobs(e){
        e.preventDefault()
        dispatch(putJob(id, jobsForm, navigate))
    }

    function changeHandler(e){
        const {name, value} = e.target
        setJobsForm({
            ...jobsForm,
            [name]: value
        })
    }

    const companies = useSelector(state => state.companies.data)
    const jobData = useSelector(state => state.jobs.job)
    useEffect(() => {
        dispatch(fetchCompany())
        dispatch(getJob(id))
    }, [])
    

    useEffect(() => {
      setJobsForm({
        title: jobData.title,
        description: jobData.description,
        companyId: jobData.companyId,
        jobType: jobData.jobType,
        skills: jobData.Skills ? (jobData.Skills.length < 1 ? jobsForm.skills : jobData.Skills) : jobsForm.skills
      })
    }, [jobData])
    
    

    return (
        <>
        <h1 style={{textAlign:"center", marginBottom: '10px'}}>Edit Job</h1>
        <div style={{ display: "flex", justifyContent: "center"}}> 
            <form style={{width: '30rem'}} onSubmit={postJobs}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input name="title" type="text" className="form-control" value={jobsForm.title} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-control" value={jobsForm.description} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company</label>
                    <select name="companyId" className="form-select" value={jobsForm.companyId} onChange={changeHandler}>
                        <option value="" disabled>--SELECT--</option>
                        {companies.map(el => {
                            return (
                                <option value={el.id} >{el.name}</option>
                            )
                        })}
                        
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Type</label>
                    <select name="jobType" className="form-select" value={jobsForm.jobType} onChange={changeHandler}>
                        <option value="" disabled>--SELECT--</option>
                        <option value="part time">Part Time</option>
                        <option value="full time">Full Time</option>
                    </select>
                </div>
                <div>
                    <label className="form-label" style={{display:"flex",justifyContent:"center"}}>Skills</label>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Level</th>
                            </tr>
                        </thead>
                        <tbody>
                        { jobsForm.skills.map((el,index)=>{
                                return (
                                    <tr key={el.id}>
                                        <td>{el.name}</td>
                                        <td>{el.level}</td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                </div>
                <button style={{width: '30rem'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormEditJobs