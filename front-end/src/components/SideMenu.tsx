import * as React from 'react';
import { Menu } from 'react-bulma-components';
import { CareRecipient, Tab } from '@App/types/index';

interface SideMenuProps {
  currentTab: Tab;
  recipients: Array<CareRecipient>;
  currentRecipient: string;
  setCurrentRecipient: Function;
  setTab: Function;
}

function SideMenu({currentTab, recipients, currentRecipient, setCurrentRecipient, setTab}: SideMenuProps) {
  return (
    <div
      style={{
        width: '15%',
        float: 'left',
        backgroundColor: 'white',
        height: '100%',
        position: 'fixed',
        paddingTop: 24,
        paddingLeft: 10
      }}
    >
      <Menu>
        <Menu.List title="Care recipients">
          {
            recipients.map((recipient: CareRecipient) => (
              <Menu.List.Item
                key={recipient.id}
                active={recipient.id === currentRecipient}
                onClick={() => setCurrentRecipient(recipient.id)}
              >
                {recipient.name}
              </Menu.List.Item>
            ))
          }
        </Menu.List>
        <Menu.List title="Views">
          <Menu.List.Item active={currentTab === 'TIMELINE'} onClick={() => setTab('TIMELINE')}>
            Visits timeline
          </Menu.List.Item>
          <Menu.List.Item active={currentTab === 'TABLE'} onClick={() => setTab('TABLE')}>
            All events
          </Menu.List.Item>
          <Menu.List.Item active={currentTab === 'GRAPHS'} onClick={() => setTab('GRAPHS')}>
            Summary
          </Menu.List.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}

export default SideMenu;