import { FETCH_COMPS_SUCCESS, GET_COMPS_SUCCESS } from "../actiocsType"

const initialState = {
    data: [],
    company: {}
} 

function reducer(state = initialState, action){
    if(action.type === FETCH_COMPS_SUCCESS){
        return {...state, data: action.payload}
    }
    if(action.type === GET_COMPS_SUCCESS){
        return {...state, company: action.payload}
    }
    return state
}

export default reducer