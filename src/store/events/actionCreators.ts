import {UserType} from "../../common/types/user";
import {EventsActionsEnum} from "../../enums/state";
import {SetEventsActionType, SetGuestActionType} from "../../common/types/state/events";
import {EventType} from "../../common/types/event";
import {AppDispatch} from "../../common/types/state/auth";
import UserService from "../../api/UserService";

export const EventsActionCreators = {
  setGuests: (guests: UserType[]): SetGuestActionType => ({ type: EventsActionsEnum.SET_GUESTS, payload: guests }),
  setEvents: (events: EventType[]): SetEventsActionType => ({ type: EventsActionsEnum.SET_EVENTS, payload: events }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(EventsActionCreators.setGuests(response.data))
    } catch (e) {
      console.log(e)
    }
  },
  createEvent: (event: EventType) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as EventType[]
      json.push(event)
      dispatch(EventsActionCreators.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json))
    } catch (e) {
      console.log(e)
    }
  },
  fetchEvents: (currentUserName: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as EventType[]
      const currentUserEvents = json.filter(event => event.author === currentUserName || event.guest === currentUserName)
      dispatch(EventsActionCreators.setEvents(currentUserEvents))
    } catch (e) {
      console.log(e)
    }
  },
}
