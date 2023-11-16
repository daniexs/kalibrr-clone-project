import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { getCompany, putCompany } from "../store/actions"

function FormEditComapany(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const company = useSelector(state => state.companies.company)

    useEffect(() => {
      dispatch(getCompany(id))
    }, [])
    
    useEffect(() => {
      setcompanyForm({
        name: company.name,
        companyLogo: company.companyLogo,
        location: company.location,
        email: company.email,
        description: company.description
      })
    }, [company])
    

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

    async function putCompanyhandler(e){
        e.preventDefault()
        dispatch(putCompany(id, companyForm, navigate))
    }

    return (
        <>
        <h1 style={{textAlign:"center", marginBottom: '10px'}}>Edit Company</h1>
        <div style={{ display: "flex", justifyContent: "center"}}> 
            <form style={{width: '30rem'}} onSubmit={putCompanyhandler}>
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

export default FormEditComapany