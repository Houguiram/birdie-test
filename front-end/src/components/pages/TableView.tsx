import * as React from 'react';
import { Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function TableView() {
  return (
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
      <tr>
        <th>Machin</th>
        <td>Visit cancelled</td>
        <td>18:00 04-12-19</td>
        <th>Truc</th>
      </tr>
      <tr>
        <th>Bidule</th>
        <td>Concern raised</td>
        <td>19:00 04-12-19</td>
        <th>Truc</th>
      </tr>
      <tr>
        <th>Machin</th>
        <td>Mental health observation</td>
        <td>19:30 04-12-19</td>
        <th>Truc</th>
      </tr>
      </tbody>
    </Table>
  );
}

export default TableView;