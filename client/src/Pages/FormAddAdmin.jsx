import { useState } from "react"
import { useNavigate } from "react-router"
import { postAdmin } from "../hooks/usePostAdmin"

function FormAdmin(){
    const navigate = useNavigate()
    const [adminForm, setAdminForm] = useState({
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
    })

    function changeHandler(e){
        const {name, value} = e.target
        setAdminForm({
            ...adminForm,
            [name] : value
        })

    }

    function postAdminHandler(e){
        e.preventDefault()
        postAdmin(adminForm, navigate)
    }

    return (
        <>
        <h1 style={{textAlign:"center", marginBottom: '10px'}}>Add Admin</h1>
        <div style={{ display: "flex", justifyContent: "center"}}> 
            <form style={{width: '30rem'}} onSubmit={postAdminHandler}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={adminForm.email} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input name="phoneNumber" value={adminForm.phoneNumber} onChange={changeHandler} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input name="address" value={adminForm.address} onChange={changeHandler} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input name="password" value={adminForm.password} onChange={changeHandler} type="password" className="form-control" />
                </div>
                <button style={{width: '30rem'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormAdmin