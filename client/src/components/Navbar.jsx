import { Link, useNavigate } from "react-router-dom"
function Navbar(){
    const navigate = useNavigate()
    function logouthandler(){
        localStorage.removeItem('access_token')
        navigate('/login')
    }

    return (
        <>
           <div>
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 ">Home</Link></li>
                    <li><Link to="/jobs" className="nav-link px-2">Jobs</Link></li>
                    <li><Link to="/company" className="nav-link px-2">Companies</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <Link to="/add-admin" type="button" className="btn btn-outline-primary me-2">Add admin</Link>
                    <button onClick={logouthandler} type="button" className="btn btn-primary">Logout</button>
                </div>
                </header>
            </div>
        </>
    )
}

export default Navbar