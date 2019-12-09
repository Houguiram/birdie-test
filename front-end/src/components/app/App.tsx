import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getCurrentRecipientId, getCurrentView } from '@App/store/selectors';

import { Heading } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import axios from 'axios';

import TopBar from '@App/components/TopBar';
import TableView from '@App/components/pages/TableView';
import TimelineView from '@App/components/pages/TimelineView';
import GraphsView from '@App/components/pages/GraphsView';
import SideMenu from '@App/components/SideMenu';
import ErrorBanner from '@App/components/ErrorBanner';

import { Tab, CareRecipient, CareRecipientId } from '@App/types';
import { setView } from '@App/store/actions';

interface AppProps {
  currentRecipientId: CareRecipientId;
  currentView: Tab;
  setView: Function;
}

interface AppState {
  recipients: Array<CareRecipient>;
  currentRecipientId: string;
  isLoading: boolean;
  error?: string;
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
  width: 75%;
  height: calc(100% - 3.25rem);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 24px;
  margin-left: 5%;
  margin-right: 5%;
  float: right;
`;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      recipients: [],
      currentRecipientId: '',
      isLoading: false,
      error: undefined
    };
  }

  componentDidMount(): void {
    this.setLoading(true);
    axios.get('/recipients')
      .then((result) => result.data)
      .then((data) => this.setRecipients(data.recipients))
      .then((_) => this.setCurrentRecipient(this.state.recipients[0].id))
      .catch((e) => this.setError(e.toString()));
    this.setLoading(false);
  }

  setLoading = (newIsLoading: boolean) => {
    this.setState({...this.state, isLoading: newIsLoading});
  }

  setError = (error: string) => {
    this.setState({...this.state, error: error});
  }

  // setTab = (newTab: Tab) => {
  //   this.setState({...this.state, tab: newTab});
  // }

  setRecipients = (newRecipients: Array<CareRecipient>) => {
    this.setState({...this.state, recipients: newRecipients});
  }

  setCurrentRecipient = (recipientId: string) => {
    this.setState({...this.state, currentRecipientId: recipientId});
  }

  render() {
    return (
      this.state.isLoading || !this.state.currentRecipientId ? (
        <div>Loading...</div>
      ) : (
        this.state.error ? (
          <ErrorBanner message={this.state.error} />
        ) : (
          <>
            <GlobalStyle />
            <Background />
            <TopBar />
            <SideMenu
              currentTab={this.props.currentView}
              setTab={(view: Tab) => this.props.setView(view)}
              recipients={this.state.recipients}
              currentRecipient={this.state.currentRecipientId}
              setCurrentRecipient={this.setCurrentRecipient}
            />
            <AppContainer>
              {this.props.currentView === 'TABLE' ? (
                <>
                  <Heading>All events</Heading>
                  <TableView recipientId={this.state.currentRecipientId} />
                </>
              ) : (
                this.props.currentView === 'TIMELINE' ? (
                  <>
                    <Heading>Visits timeline</Heading>
                    <TimelineView />
                  </>
                ) : (
                  <>
                    <Heading>Graphs</Heading>
                    <GraphsView />
                  </>
                )
              )}
            </AppContainer>
          </>
        )
      )
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  currentRecipientId: getCurrentRecipientId(state),
  currentView: getCurrentView(state)
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  setView: (view: Tab) => dispatch(setView(view))
});

export default connect(mapStateToProps, mapDispatchToProps)(App) as React.ComponentClass<{}>;