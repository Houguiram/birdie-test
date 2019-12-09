import * as React from 'react';
import { Table, Pagination } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useEffect, useState } from 'react';
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
  const [pageNb, setPageNb] = useState(1);
  useEffect(
    () => {
      props.fetchEvents(props.currentRecipientId, pageNb);
    },
    [props.currentRecipientId, pageNb]);
  return (
    !props.events ? (
      <div>Loading...</div>
    ) : (
      typeof props.events === 'string' ? (
        <ErrorBanner message={props.events} />
      ) : (
        <>
          <Pagination current={pageNb} total={10} delta={1} onChange={(nav) => setPageNb(nav as unknown as number)} />
          <div style={{paddingTop: 20}} />
          <Table style={{tableLayout: 'fixed'}}>
            <thead>
            <tr>
              <th>Event</th>
              <th>Time</th>
              <th>Caregiver</th>
            </tr>
            </thead>
            <tbody>
            {props.events.map(event => (
              <tr key={event.id}>
                <td>
                  <b>{sentenceCase(event.event_type)}</b>
                  <ul style={{listStyleType: 'disc', paddingLeft: '2em', overflow: 'hidden'}}>
                    {Object.keys(JSON.parse(event.payload)).map((property: string) => {
                      if (property !== 'timestamp' &&
                        property !== 'event_type' &&
                        typeof JSON.parse(event.payload)[property] !== 'object' &&
                        !property.includes('id')) {
                        return <li key={property}><b>{sentenceCase(property)}: </b>{JSON.parse(event.payload)[property]}
                        </li>;
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </td>
                <td>{event.timestamp}</td>
                <td>{event.caregiver_id}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </>
      )
    )
  );
}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  events: getEvents(state),
  currentRecipientId: getCurrentRecipientId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  fetchEvents: (recipientId: CareRecipientId, pageNb: number) => dispatch(fetchEvents(recipientId, pageNb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableView) as React.ComponentClass<{}>;
