import * as React from 'react';
import { Navbar, Tabs } from 'react-bulma-components';
import Logo from '@App/components/Logo';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Tab } from '@App/components/app/App';

const LogoUrl = require('../assets/images/logo-birdie.svg');

interface TopBarProps {
  currentTab: Tab;
  setTab: Function;
}

function TopBar(props: TopBarProps) {
  const {currentTab, setTab} = {...props};
  return (
    <Navbar fixed="top">
      <Navbar.Brand>
        <Navbar.Item>
          <Logo src={LogoUrl} />
        </Navbar.Item>
        <Navbar.Item>
          <Tabs type="toggle-rounded">
            <ul>
              <TopBarTab name="Table" id="TABLE" currentTab={currentTab} setTab={setTab} />
              <TopBarTab name="Timeline" id="TIMELINE" currentTab={currentTab} setTab={setTab} />
              <TopBarTab name="Graphs" id="GRAPHS" currentTab={currentTab} setTab={setTab} />
              <TopBarTab name="Hello" id="HELLO" currentTab={currentTab} setTab={setTab} />
            </ul>
          </Tabs>
        </Navbar.Item>
      </Navbar.Brand>
    </Navbar>
  );
}

interface TopBarTabProps {
  name: string;
  id: Tab;
  currentTab: Tab;
  setTab: Function;
}

function TopBarTab(props: TopBarTabProps) {
  const {name, id, currentTab, setTab} = {...props};
  return (
    <li className={currentTab === id ? 'is-active' : ''}><a onClick={() => setTab(id)}>{name}</a></li>
  );
}

export default TopBar;
