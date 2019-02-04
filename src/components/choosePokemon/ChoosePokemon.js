import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { Headings, Input, PokemonList, Button } from '../../elements';
import Downshift from 'downshift';


export class ChoosePokemon extends Component {
  render() {
    return (
      <Query query={POKEMONS_QUERY}>
        {({ loading, data }) => {
          if (loading) return 'loading...';
          const { Pokemons } = data;
          return (
            <Downshift
              onChange={selection =>
                this.props.history.push(`/pokemon/${selection.name}`)
              }
              itemToString={item => (item ? item.name : '')}
            >
              {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem
              }) => (
                <div>
                  <Headings.h2 {...getLabelProps()}>
                    Select a Pokemon
                  </Headings.h2>
                  <Input {...getInputProps()} placeholder="Type to filter" />
                  <PokemonList {...getMenuProps()}>
                    {Pokemons.filter(
                      item => !inputValue || item.name.includes(inputValue)
                    ).map((item, index) => (
                      <li key={index}>
                        <Button
                          kind="search"
                          {...getItemProps({ key: item.id, index, item })}
                        >
                          {item.name}
                        </Button>
                      </li>
                    ))}
                  </PokemonList>
                </div>
              )}
            </Downshift>
          );
        }}
      </Query>
    );
  }
}

const POKEMONS_QUERY = gql`
  query Pokemons {
    Pokemons(first: 151) {
      id
      name
    }
  }
`;

export default withRouter(ChoosePokemon);
