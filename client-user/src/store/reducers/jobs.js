import { FETCH_JOBS_SUCCESS, GET_JOBS_SUCCESS } from "../actiocsType"

const initialState = {
    data: [],
    job: {}
}

function reducer(state = initialState, action){
    if(action.type === FETCH_JOBS_SUCCESS){
        return {...state, data: action.payload}
    }
    if(action.type === GET_JOBS_SUCCESS){
        return {...state, job: action.payload}
    }
    return state
}

export default reducer