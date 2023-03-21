import { combineReducers } from 'redux'

const rxLoginInfo = (state = { rxLoginInfo: null }, action: any) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                rxLoginInfo: action.payload
            }
        case "LOG_OUT":
            return {
                ...state,
                rxLoginInfo: null
            }
        default:
            return state
    }
}

const rxNotiCnt = (state = { rxNotiCnt: null }, action: any) => {
    switch (action.type) {
        case "SET":
            return {
                ...state,
                rxNotiCnt: action.payload
            }
        default:
            return state
    }
}






const rootReducer = combineReducers({
    rxLoginInfo,
    rxNotiCnt
})

export default rootReducer