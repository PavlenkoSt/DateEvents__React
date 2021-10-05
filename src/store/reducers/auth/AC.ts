import { AuthActionTypeEnum } from './types'


const authActionCreators = {
    setAuth: (auth: boolean) => ({ type: AuthActionTypeEnum.SET_IS_AUTH, payload: auth }),
    setLoading: (loading: boolean) => ({ type: AuthActionTypeEnum.SET_IS_LOADING, payload: loading }),
}

export default authActionCreators