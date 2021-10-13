import {UserType} from "../user";
import {EventType} from "../event";
import {EventsActionsEnum} from "../../../enums/state";

export type EventsStateType = {
  guests: UserType[]
  events: EventType[]
}

export type SetGuestActionType = {
  type: EventsActionsEnum.SET_GUESTS
  payload: UserType[]
}

export type SetEventsActionType = {
  type: EventsActionsEnum.SET_EVENTS
  payload: EventType[]
}

export type EventsActions =
  SetGuestActionType |
  SetEventsActionType
