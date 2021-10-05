import { AuthActionTypeEnum, AuthActionTypes, AuthStateType } from './types'


const initialState: AuthStateType = {
    isAuth: false
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthStateType => {
    switch(action.type){
        case AuthActionTypeEnum.SET_IS_AUTH: 
            return { ...state, isAuth: action.payload }
        default: 
            return state
    }
}

export default authReducer