import * as React from 'react';
import { Navbar, Tabs } from 'react-bulma-components';
import Logo from '@App/components/Logo';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';

const LogoUrl = require('../assets/images/logo-birdie.svg');

function TopBar() {
  const [currentTab, setCurrentTab] = useState('currentTable');
  return (
    <Navbar fixed="top">
      <Navbar.Brand>
        <Navbar.Item>
          <Logo src={LogoUrl} />
        </Navbar.Item>
        <Navbar.Item>
          <Tabs type="toggle-rounded">
            <ul>
              <TopBarTab name="Table" id="currentTable" currentTab={currentTab} setCurrentTab={setCurrentTab} />
              <TopBarTab name="Timeline" id="timeline" currentTab={currentTab} setCurrentTab={setCurrentTab} />
              <TopBarTab name="Graphs" id="graphs" currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </ul>
          </Tabs>
        </Navbar.Item>
      </Navbar.Brand>
    </Navbar>
  );
}

interface TopBarProps {
  name: string;
  id: string;
  currentTab: string;
  setCurrentTab: Function;
}

function TopBarTab(props: TopBarProps) {
  const {name, id, currentTab, setCurrentTab} = {...props};
  return (
    <li className={currentTab === id ? 'is-active' : ''}><a onClick={() => setCurrentTab(id)}>{name}</a></li>
  );
}

export default TopBar;
