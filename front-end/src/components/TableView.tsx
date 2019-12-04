import * as React from 'react';
import { Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function TableView() {
  return (
    <Table>
      <tbody>
      <tr>
        <th>1</th>
        <td>Coucou</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Salut</td>
      </tr>
      </tbody>
    </Table>
  );
}

export default TableView;