import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers, 
    compose} 
from 'redux'

import thunk from 'redux-thunk'
import companiesReducer from './reducers/companies'
import jobsReducer from './reducers/jobs'

const reducer = combineReducers({
    companies: companiesReducer,
    jobs: jobsReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store