import { FETCH_JOBS_SUCCESS, GET_JOBS_SUCCESS } from "./actiocsType"


export const fetchjobsSuccess = payload => {
    return {type: FETCH_JOBS_SUCCESS, payload}
}
export const getJobSuccess = payload => {
    return {type: GET_JOBS_SUCCESS, payload}
}

export const fecthJobs = (handleShow) => {
    return async dispatch => {
        try {
            handleShow()
            const response = await fetch('https://chale1.exdrans.xyz/client/jobs')
            if(!response.ok){
                throw response
            }
            const data = await response.json()
            dispatch(fetchjobsSuccess(data))
        } catch (error) {
            const data = await error.json()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
            })
        }
    }
}

export const getJob = (id) => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/client/jobs/' + id)
            if(!response.ok){
                throw response
            }
            const data = await response.json()
            dispatch(getJobSuccess(data))
        } catch (error) {
            const data = await error.json()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
            })
            console.log(error)
        }
    }
}