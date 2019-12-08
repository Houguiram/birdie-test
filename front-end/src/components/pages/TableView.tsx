import * as React from 'react';
import { Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { sentenceCase } from 'sentence-case';
import ErrorBanner from '@App/components/ErrorBanner';

type Event = {
  id: string;
  caregiver_id: string;
  timestamp: string;
  event_type: string;
};

function TableView({recipientId}: { recipientId: string }) {
  const [events, setEvents] = useState([] as Array<Event>);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  useEffect(
    () => {
      const fetchEvents = async () => {
        setIsLoading(true);
        const result = await axios('/recipients/' + recipientId + '/events');
        setEvents(result.data.results);
        setIsLoading(false);
      };
      try {
        fetchEvents();
      } catch (e) {
        setError(e.toString());
        setIsLoading(false);
      }
    },
    [recipientId]);
  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      error ? (
        <ErrorBanner message={error} />
      ) : (
        <Table>
          <thead>
          <tr>
            <th>Event type</th>
            <th>Time</th>
            <th>Caregiver</th>
          </tr>
          </thead>
          <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <th>{sentenceCase(event.event_type)}</th>
              <td>{event.timestamp}</td>
              <td>{event.caregiver_id}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      )
    )
  );
}

export default TableView;