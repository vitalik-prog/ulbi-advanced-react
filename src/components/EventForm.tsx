import {Button, DatePicker, Form, Input, Row, Select} from 'antd';
import React, {FC, useState} from 'react';
import {validationRules} from "../helpers/validationRules/validationRules";
import {UserType} from "../common/types/user";
import {EventType} from "../common/types/event";
import {Moment} from "moment";
import {useTypedSelector} from "../hooks/useTypedSelector";

type EventFormProps = {
  guests: UserType[],
  submitNewEvent: (event: EventType) => void
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<EventType>({
    author: '',
    date: '',
    description: '',
    guest: ''
  })
  const {user} = useTypedSelector(state => state.auth)

  const handleGuestSelect = (guest: string) => {
    setEvent({...event, guest})
  }

  const handleDateSelect = (date: Moment | null) => {
    if (date) {
      const selectedDate = date?.format('DD-MM-YYYY')
      setEvent({...event, date: selectedDate})
    }
  }

  const submitForm = () => {
    props.submitNewEvent({...event, author: user.username})
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      onFinish={submitForm}
    >
      <Form.Item
        label="Event name"
        name="description"
        rules={[validationRules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({...event, description:e.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="Choose date"
        name="date"
        rules={[validationRules.required(), validationRules.isDatePast()]}
      >
        <DatePicker
          onChange={handleDateSelect}
        />
      </Form.Item>
      <Form.Item
        label="Choose guest"
        name="guest"
        rules={[validationRules.required()]}
      >
        <Select style={{ width: 120 }} onChange={handleGuestSelect}>
          {props.guests.map(guest =>
            <Select.Option key={guest.id} value={guest.username}>{guest.username}</Select.Option>
          )}
        </Select>
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EventForm;