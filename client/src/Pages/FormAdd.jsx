import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { postCompany } from "../store/actions"

function FormComapany(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [companyForm, setcompanyForm] = useState({
        name: '',
        companyLogo: '',
        location: '',
        email: '',
        description: ''
    })

    function changeHandler(e){
        const {name, value} = e.target
        setcompanyForm({
            ...companyForm,
            [name] : value
        })

    }

    function postCompanyHandler(e){
        e.preventDefault()
        dispatch(postCompany(companyForm, navigate))
    }

    return (
        <>
        <h1 style={{textAlign:"center", marginBottom: '10px'}}>Add Company</h1>
        <div style={{ display: "flex", justifyContent: "center"}}> 
            <form style={{width: '30rem'}} onSubmit={postCompanyHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={companyForm.name} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company Logo</label>
                    <input name="companyLogo" value={companyForm.companyLogo} onChange={changeHandler} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input name="location" value={companyForm.location} onChange={changeHandler} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" value={companyForm.email} onChange={changeHandler} type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea name="description" value={companyForm.description} onChange={changeHandler} className="form-control" />
                </div>
                <button style={{width: '30rem'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormComapany