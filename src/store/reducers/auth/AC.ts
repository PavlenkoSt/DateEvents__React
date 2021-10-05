import { AuthActionTypeEnum } from './types'


const authActionCreators = {
    setAuth: (auth: boolean) => ({ type: AuthActionTypeEnum.SET_IS_AUTH, payload: auth }),
    setLoading: (loading: boolean) => ({ type: AuthActionTypeEnum.SET_IS_LOADING, payload: loading }),
    setError: (error: string) => ({ type: AuthActionTypeEnum.SET_ERROR, payload: error }),
}

export default authActionCreators