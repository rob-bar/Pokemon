import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Name from './Name';
import Stats from './Stats';
import SelectedMoves from './SelectedMoves';
import Moves from './Moves';

const StyledPokemon = styled.div`
  display: grid;
  grid-template-columns: 200px 3fr 2fr;
  grid-gap: 20px;
`;

export class Pokemon extends Component {
  render() {
    const { match, addMember, updateSelected } = this.props;
    if (match.params.name) {
      return (
        <Query query={POKEMON_QUERY} variables={{ name: match.params.name }}>
          {({ loading, data }) => {
            if (loading) return 'Loading...';
            const { Pokemon } = data;
            return (
              <StyledPokemon>
                <Name pokemon={Pokemon} addMember={addMember} />
                <div>
                  <Stats stats={Pokemon.stats} />
                  <SelectedMoves selectedMoves={Pokemon.selectedMoves} />
                </div>
                <Moves updateSelected={updateSelected} pokemon={Pokemon} />
              </StyledPokemon>
            );
          }}
        </Query>
      );
    }
    return '';
  }
}

const POKEMON_QUERY = gql`
  query Pokemon($name: String!) {
    Pokemon(name: $name) {
      id
      name
      image
      stats {
        name
        value
      }
      types {
        name
      }
      abilities {
        name
      }
      moves {
        name
      }
    }
  }
`;

export default Pokemon;
