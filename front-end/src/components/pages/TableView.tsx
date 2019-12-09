import * as React from 'react';
import { Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useEffect } from 'react';
import { sentenceCase } from 'sentence-case';
import ErrorBanner from '@App/components/ErrorBanner';
import { RootState } from '@App/store/reducers';
import { getCurrentRecipientId, getEvents } from '@App/store/selectors';
import { Dispatch } from 'redux';
import { CareRecipientId, Event } from '@App/types';
import { fetchEvents } from '@App/store/actions';
import { connect } from 'react-redux';

interface TableViewProps {
  events: Array<Event>;
  currentRecipientId: CareRecipientId;
  fetchEvents: Function;
}

function TableView({...props}: TableViewProps) {
  useEffect(
    () => {
      props.fetchEvents(props.currentRecipientId);
    },
    [props.currentRecipientId]);
  return (
    !props.events ? (
      <div>Loading...</div>
    ) : (
      typeof props.events === 'string' ? (
        <ErrorBanner message={props.events} />
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
          {props.events.map(event => (
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

const mapStateToProps = (state: RootState, ownProps: object) => ({
  events: getEvents(state),
  currentRecipientId: getCurrentRecipientId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  fetchEvents: (recipientId: CareRecipientId) => dispatch(fetchEvents(recipientId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableView) as React.ComponentClass<{}>;
