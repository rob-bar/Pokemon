import ApolloClient from 'apollo-boost';

const defaultState = {
  selectedPokemon: {},
  squad: []
};

export default new ApolloClient({
  uri: process.env.REACT_APP_POKE_ENDPOINT,
  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
});
