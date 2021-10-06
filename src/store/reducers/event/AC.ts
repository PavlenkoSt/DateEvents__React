import { AppDispatch } from './../../index';
import { EventType } from './../../../models/EventType';
import { EventActionTypesEnum, SetEventsAction, SetGuestsAction } from './types';
import UserApi from '../../../api/UserApi';


const eventActionCreators = {
    setEvents: (events: EventType[]): SetEventsAction => ({ type: EventActionTypesEnum.SET_EVENTS, payload: events }),
    setGuests: (guests: string[]): SetGuestsAction => ({ type: EventActionTypesEnum.SET_GUESTS, payload: guests }),
    fetchGuests: (username: string) => async (dispatch: AppDispatch) => {
        try{
            const usernames = await UserApi.getAllUsernames(username)
            await dispatch(eventActionCreators.setGuests(usernames))
        }catch(e){
            console.log(e)
        }
    }
}

export default eventActionCreators