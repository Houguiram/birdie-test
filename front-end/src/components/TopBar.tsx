import * as React from 'react';
import { Navbar } from 'react-bulma-components';
import Logo from '@App/components/Logo';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const LogoUrl = require('../assets/images/logo-birdie.svg');

function TopBar() {
  return (
    <Navbar fixed="top" style={{boxShadow: '0 -15px 20px 0px'}}>
      <Navbar.Brand>
        <Navbar.Item>
          <Logo src={LogoUrl} />
        </Navbar.Item>
      </Navbar.Brand>
    </Navbar>
  );
}

export default TopBar;
