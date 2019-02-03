import React, { Component } from 'react';
import styled from 'styled-components';
import ChoosePokemon from './choosePokemon/ChoosePokemon';
import Pokemon from './pokemon/Pokemon';
import Squad from './squad/Squad';

export class PokeDex extends Component {
  state = {
    members: [...Array(6)],
    selected: {}
  };

  addMember = pokemon => {
    const members = [...this.state.members];
    for (var i = 0; i < members.length; i++) {
      if (!members[i]) {
        members[i] = pokemon;
        break;
      }
    };
    this.setState({ members: members });
  };

  updateSelected = (pokemon, move) => {
    const selected = { ...this.state.selected };
    selected.pokemon = pokemon;
    if(selected.pokemon.movesLearned) {
      selected.pokemon.movesLearned.push(move);
    } else {
      selected.pokemon.movesLearned = [move];
    }
    this.setState({selected});
  };

  render() {
    return (
      <div>
        <PokeDexGrid>
          <ChoosePokemon />
          <div>
            <Pokemon match={this.props.match} updateSelected={this.updateSelected} addMember={this.addMember} />
          </div>
        </PokeDexGrid>
        <Squad members={this.state.members} />
      </div>
    );
  }
}

const PokeDexGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 20px;
`;

export default PokeDex;
