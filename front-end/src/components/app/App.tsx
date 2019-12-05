import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Heading } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import TopBar from '@App/components/TopBar';
import TableView from '@App/components/pages/TableView';
import TimelineView from '@App/components/pages/TimelineView';
import GraphsView from '@App/components/pages/GraphsView';
import HelloView from '@App/components/pages/HelloView';

export type Tab = 'TABLE' | 'TIMELINE' | 'GRAPHS' | 'HELLO';

interface AppProps {

}

interface AppState {
  tab: Tab;
}

const GlobalStyle = createGlobalStyle`
  body {
    height: calc(100vh - 3.25rem);
  }
`;

const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #F9F9F9;
  z-index: -99999;
`;

const AppContainer = styled.div`
  width: 90%;
  height: calc(100% - 3.25rem);
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
        <Background />
        <TopBar currentTab={this.state.tab} setTab={this.setTab} />
        <AppContainer>
          {this.state.tab === 'TABLE' ? (
            <>
              <Heading>Table view</Heading>
              <TableView />
            </>
          ) : (
            this.state.tab === 'TIMELINE' ? (
              <>
                <Heading>Timeline view</Heading>
                <TimelineView />
              </>
            ) : (
              this.state.tab === 'GRAPHS' ? (
                <>
                  <Heading>Graphs view</Heading>
                  <GraphsView />
                </>

              ) : (
                <>
                  <Heading>Hello view</Heading>
                  <HelloView />
                </>
              )
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