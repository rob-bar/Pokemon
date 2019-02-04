import React, { Component } from 'react';
import styled from 'styled-components';
import { ApolloConsumer } from 'react-apollo';
import { Headings } from '../../elements';
import { Colors } from '../../utilities';

export class Moves extends Component {
  moves = [];

  selectMove = (move) => {
    if(!this.moves.includes(move)) {
      if(this.moves.length <= 3) {
        this.moves.push(move);
      }
    } else {
      this.moves = this.moves.filter((element) => element !== move);
    }

    return this.moves;
  }

  toggleMove = (e, client) => {
    e.preventDefault();
    this.selectMove(e.target.text);
    console.log(client);
    client.writeData({ data: { selectedMoves: this.moves}});
  };

  render() {
    return (
      <div>
        <Headings.h4>Selected moves</Headings.h4>
        <MoveList>
          {this.props.pokemon.moves.map((move, i) => (
            <li key={i}>
            <ApolloConsumer>
              {client => (
                <a href="#" onClick={
                  (e) => {
                    this.toggleMove(e, client);
                  }} className="name">
                  {move.name}
                </a>
              )}
            </ApolloConsumer>
            </li>
          ))}
        </MoveList>
      </div>
    );
  }
}

const MoveList = styled.ul`
  list-style-type: none;
  max-height: 345px;
  overflow: scroll;

  .name {
    color: ${Colors.blue};
    text-decoration: none;
  }
`;

export default Moves;
