import * as React from 'react';
import { Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { sentenceCase } from 'sentence-case';

type Event = {
  id: string;
  caregiver_id: string;
  care_recipient_id: string;
  timestamp: string;
  event_type: string;
};

function TableView() {
  const [events, setEvents] = useState([] as Array<Event>);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const fetchEvents = async () => {
        setIsLoading(true);
        const result = await axios('/events');
        setEvents(result.data.results);
        setIsLoading(false);
      };
      fetchEvents();
    },
    []);
  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <Table>
        <thead>
        <tr>
          <th>Care recipient</th>
          <th>Event type</th>
          <th>Time</th>
          <th>Caregiver</th>
        </tr>
        </thead>
        <tbody>
        {events.map(event => (
          <tr key={event.id}>
            <th>{event.care_recipient_id}</th>
            <td>{sentenceCase(event.event_type)}</td>
            <td>{event.timestamp}</td>
            <th>{event.caregiver_id}</th>
          </tr>
        ))}
        </tbody>
      </Table>
    )
  );
}

export default TableView;