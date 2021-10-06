import { EventActionTypes, EventActionTypesEnum, EventStateType } from "./types"


const initialState: EventStateType = {
    events: [],
    guests: []
}

const eventReducer = (state = initialState, action: EventActionTypes) => {
    switch(action.type){
        case EventActionTypesEnum.SET_EVENTS: 
            return { ...state, events: action.payload }
        case EventActionTypesEnum.SET_GUESTS: 
            return { ...state, guests: action.payload }

        default: 
            return state
    }
}

export default eventReducer