import { EventType } from './../../../models/EventType';

export type EventStateType = {
    events: EventType[]
}

export enum EventActionTypesEnum {
    SET_EVENTS = 'SET_EVENTS'
}

export type SetEventsAction = {
    type: EventActionTypesEnum.SET_EVENTS,
    payload: EventType[]
}

export type EventActionTypes = 
    SetEventsAction