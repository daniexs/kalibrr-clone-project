import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { fetchCompany, postJob } from "../store/actions"

function FormJobs(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function postJobs(e){
        e.preventDefault()
        dispatch(postJob(jobsForm, navigate))
    }
    
    const [jobsForm, setJobsForm] = useState({
        title: '',
        description: '',
        companyId: '',
        jobType: '',
        authorId: 1,
        skills: [
            {
                name: '',
                level: ''
            },
            {
                name: '',
                level: ''
            }
        ]
    })

    function changeHandlerSkill(e, i){
        const {name, value} = e.target
        const dataSkill = [...jobsForm.skills]
        dataSkill[i] = {
            ...dataSkill[i],
            [name] : value
        }

        setJobsForm({
            ...jobsForm,
            skills: dataSkill
        })
    }

    function changeHandler(e){
        const {name, value} = e.target
        setJobsForm({
            ...jobsForm,
            [name]: value
        })
    }

    const companies = useSelector(state => state.companies.data)
    useEffect(() => {
      dispatch(fetchCompany())
    }, [])
    

    return (
        <>
        <h1 style={{textAlign:"center", marginBottom: '10px'}}>Add Job</h1>
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
                                <option key={el.id} value={el.id} >{el.name}</option>
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
                <div style={{display: "flex", gap: "10px"}}>
                    <div className="mb-3" style={{width: "20rem"}}>
                        <label className="form-label">Name</label>
                        <input name="name" type="text" className="form-control" value={jobsForm.skills[0].name} onChange={(e)=>changeHandlerSkill(e,0)} />
                    </div>
                    <div className="mb-3" style={{width: "10rem"}}>
                        <label className="form-label">Level</label>
                        <select name="level" className="form-select" value={jobsForm.skills[0].level} onChange={(e)=>changeHandlerSkill(e,0)}>
                        <option value="" disabled>--SELECT--</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>
                <div style={{display: "flex", gap: "10px"}}>
                    <div className="mb-3" style={{width: "20rem"}}>
                        <label className="form-label">Name</label>
                        <input name="name" type="text" className="form-control" value={jobsForm.skills[1].name} onChange={(e)=>changeHandlerSkill(e,1)} />
                    </div>
                    <div className="mb-3" style={{width: "10rem"}}>
                        <label className="form-label">Level</label>
                        <select name="level" className="form-select" value={jobsForm.skills[1].level} onChange={(e)=>changeHandlerSkill(e,1)}>
                            <option value="" disabled>--SELECT--</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>
                <button style={{width: '30rem'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormJobs