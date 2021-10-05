export type AuthStateType = {
    isAuth: boolean
    isLoading: boolean
    error: string
}

export enum AuthActionTypeEnum {
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export type SetIsAuthAction = {
    type: AuthActionTypeEnum.SET_IS_AUTH,
    payload: boolean
}

export type SetIsLoadingAction = {
    type: AuthActionTypeEnum.SET_IS_LOADING,
    payload: boolean
}

export type SetErrorAction = {
    type: AuthActionTypeEnum.SET_ERROR,
    payload: string
}

export type AuthActionTypes = 
    SetIsAuthAction | 
    SetIsLoadingAction |
    SetErrorAction