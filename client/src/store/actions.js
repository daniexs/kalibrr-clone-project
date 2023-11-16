import { FETCH_COMPS_SUCCESS, FETCH_JOBS_SUCCESS, GET_COMPS_SUCCESS, GET_JOBS_SUCCESS } from "./actiocsType"

export const fetchCompaniesSuccess = payload => {
    return { type: FETCH_COMPS_SUCCESS, payload }
}

export const getCompanySuccess = payload => {
    return {type: GET_COMPS_SUCCESS, payload}
}

export const getCompany = (id) => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/companies/'+ id,{
                headers : {access_token: localStorage.getItem('access_token')}
            })
            if(!response.ok){
                throw response
            }
            const data = await response.json()
            dispatch(getCompanySuccess(data))
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

export const fetchCompany = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/companies', {
                headers : {access_token: localStorage.getItem('access_token')}
            })
            if(!response.ok){
                throw response
            }
            const data = await response.json()
            dispatch(fetchCompaniesSuccess(data))
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

export const putCompany = (id, companyForm, navigate) => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/companies/' + id,{
                method: 'put',
                body: JSON.stringify(companyForm),
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            if(!response.ok){
                throw response
            }
            navigate('/company')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Edit company in successfully'
            })
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

export const postCompany = (companyForm, navigate) => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/companies',{
                method: 'post',
                body: JSON.stringify(companyForm),
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            if(!response.ok){
                throw response
            }
            navigate("/company")
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Add company in successfully'
            })
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

export const delCompany = (id) => {
    return async  dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/companies/' + id,{
                method: "delete",
                headers : {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            if(!response.ok){
                throw response
            }
            dispatch(fetchCompany())
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
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

export const fetchjobsSuccess = payload => {
    return {type: FETCH_JOBS_SUCCESS, payload}
}
export const getJobSuccess = payload => {
    return {type: GET_JOBS_SUCCESS, payload}
}

export const putJob = (id,jobsForm, navigate) => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/jobs/'+ id, {
                method: 'put',
                body: JSON.stringify(jobsForm),
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            if(!response.ok){
                throw response
            }
            navigate('/jobs')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Edit job in successfully'
            })
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
            const response = await fetch('https://chale1.exdrans.xyz/jobs/' + id, {
                headers : {access_token: localStorage.getItem('access_token')}
            })
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
        }
    }
}

export const fecthJobs = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/jobs',{
                headers : {access_token: localStorage.getItem('access_token')}
            })
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

export const postJob = (jobsForm, navigate) => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/jobs', {
                method: 'post',
                body: JSON.stringify(jobsForm),
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            if(!response.ok){
                throw response
            }
            navigate('/jobs')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Add job in successfully'
            })
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

export const delJob = (id) => {
    return async  dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/jobs/' + id,{
                method: "delete",
                headers : {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            if(!response.ok){
                throw response
            }
            dispatch(fecthJobs())
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
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



export const postLogin = (loginForm, navigate) => {
    return async dispatch => {
        try {
            const response = await fetch('https://chale1.exdrans.xyz/login', {
                method: 'post',
                body: JSON.stringify(loginForm),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok){
                throw response
            }
            const data = await response.json()
            localStorage.setItem('access_token', data.access_token)
            navigate("/")
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
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
