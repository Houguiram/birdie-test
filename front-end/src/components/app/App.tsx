import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Heading } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import TopBar from '@App/components/TopBar';
import TableView from '@App/components/TableView';
import TimelineView from '@App/components/TimelineView';
import GraphsView from '@App/components/GraphsView';

export type Tab = 'TABLE' | 'TIMELINE' | 'GRAPHS';

interface AppProps {

}

interface AppState {
  tab: Tab;
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 24px;
  margin-left: 5%;
  margin-right: 5%;
`;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {tab: 'TABLE'};
  }

  setTab = (newTab: Tab) => {
    this.setState({tab: newTab});
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <TopBar currentTab={this.state.tab} setTab={this.setTab} />
        <AppContainer>
          {this.state.tab === 'TABLE' ? (
            <>
              <Heading>Table view</Heading>
              <TableView />
            </>
          ) : (
            this.state.tab === 'TIMELINE' ? (
              <TimelineView />
            ) : (
              <GraphsView />
            )
          )}
        </AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);