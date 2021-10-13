import React, {FC, useEffect, useState} from 'react';
import EventsCalendar from "../components/EventsCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {EventType} from "../common/types/event";

const Events: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const {guests, events} = useTypedSelector(state => state.events)
  const {user} = useTypedSelector(state => state.auth)
  const { fetchGuests, createEvent, fetchEvents } = useActions()

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  },[])

  const createNewEvent = (event: EventType) => {
    createEvent(event)
    setIsModalVisible(false)
  }

  return (
    <div>
      <EventsCalendar events={events} />
      <Row justify="center" style={{ backgroundColor: "white", margin: "10px 0", padding: "10px 0" }}>
        <Button
          onClick={() => setIsModalVisible(true)}
        >
          Add event
        </Button>
      </Row>
      <Modal
        title="Add event"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <EventForm
          guests={guests}
          submitNewEvent={createNewEvent}
        />
      </Modal>
    </div>
  );
};

export default Events;