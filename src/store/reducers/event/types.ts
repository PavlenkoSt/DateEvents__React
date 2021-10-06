import { EventType } from './../../../models/EventType';

export type EventStateType = {
    events: EventType[],
    guests: string[]
}

export enum EventActionTypesEnum {
    SET_EVENTS = 'SET_EVENTS',
    SET_GUESTS = 'SET_GUESTS'
}

export type SetEventsAction = {
    type: EventActionTypesEnum.SET_EVENTS,
    payload: EventType[]
}

export type SetGuestsAction = {
    type: EventActionTypesEnum.SET_GUESTS,
    payload: string[]
}

export type EventActionTypes = 
    SetEventsAction |
    SetGuestsAction