import authActionCreators from "../reducers/auth/AC"
import eventActionCreators from "../reducers/event/AC"


const actionCreators = {
    ...authActionCreators,
    ...eventActionCreators
}

export default actionCreators