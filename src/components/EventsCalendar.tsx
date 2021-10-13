import {Badge, Calendar } from 'antd';
import React, {FC} from 'react';
import {EventType} from "../common/types/event";
import {Moment} from "moment";

type EventsCalendarProps = {
  events: EventType[]
}

const EventsCalendar: FC<EventsCalendarProps> = (props) => {

  function dateCellRender(value: Moment) {
    const formattedDate = value.format('DD-MM-YYYY')
    const currentDateEvents = props.events.filter(event => event.date === formattedDate)
    return (
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {currentDateEvents.map((event, index) => (
          <li key={index}>
            <Badge text={event.description} color={"geekblue"} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  );
};

export default EventsCalendar;