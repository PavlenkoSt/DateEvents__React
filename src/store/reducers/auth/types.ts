export type AuthStateType = {
    isAuth: boolean
}

export enum AuthActionTypeEnum {
    SET_IS_AUTH = 'SET_IS_AUTH'
}

export type SetIsAuth = {
    type: AuthActionTypeEnum.SET_IS_AUTH,
    payload: boolean
}

export type AuthActionTypes = 
    SetIsAuth