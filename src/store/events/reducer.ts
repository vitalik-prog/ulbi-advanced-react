import {EventsActions, EventsStateType} from "../../common/types/state/events";
import {EventsActionsEnum} from "../../enums/state";

const initialState: EventsStateType = {
  events: [],
  guests: []
}

const eventsReducer = (state = initialState, action: EventsActions): EventsStateType => {
  switch (action.type) {
    case EventsActionsEnum.SET_EVENTS:
      return { ...state, events: action.payload }
    case EventsActionsEnum.SET_GUESTS:
      return  { ...state, guests: action.payload }
    default:
      return state
  }
}

export default eventsReducer
