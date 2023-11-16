import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fecthJobs, fetchCompany } from "../store/actions"

function DashboardPage(){
    const jobs = useSelector(state => state.jobs.data)
    const companies = useSelector(state => state.companies.data)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fecthJobs())
      dispatch(fetchCompany())
    }, [])
    
    return (
        <>
            <h1 style={{textAlign:"center", marginBottom: '20px'}}>Dashboard</h1>
            <div style={{display: "flex", justifyContent: "center", gap: '5px'}}>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Total Jobs</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{jobs.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Total Companies</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{companies.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            
        </>
    )
}

export default DashboardPage