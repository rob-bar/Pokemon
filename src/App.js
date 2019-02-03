import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import client from './graphql';
import PokeDex from './components/PokeDex';
import GlobalStyle from './Global';

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 200px;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Container>
          <Router>
            <div>
              <Link to={'/'}>
                <Logo src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554" />
              </Link>
              <Switch>
                <Route exact path="/" component={PokeDex} />
                <Route path="/pokemon/:name" component={PokeDex} />
              </Switch>
            </div>
          </Router>
        </Container>
        <GlobalStyle />
      </ApolloProvider>
    );
  }
}

export default App;
