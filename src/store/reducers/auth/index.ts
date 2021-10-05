import { AuthActionTypeEnum, AuthActionTypes, AuthStateType } from './types'


const initialState: AuthStateType = {
    isAuth: false,
    isLoading: false,
    error: ''
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthStateType => {
    switch(action.type){
        case AuthActionTypeEnum.SET_IS_AUTH: 
            return { ...state, isAuth: action.payload }
        case AuthActionTypeEnum.SET_IS_LOADING: 
            return { ...state, isLoading: action.payload }
        case AuthActionTypeEnum.SET_ERROR: 
            return { ...state, error: action.payload }
        default: 
            return state
    }
}

export default authReducer