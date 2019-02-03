import React, { Component } from 'react';
import styled from 'styled-components';
import { Headings } from '../../elements';
import { Colors } from '../../utilities';

export class Moves extends Component {
  toggleMove = e => {
    e.preventDefault();
    this.props.updateSelected(this.props.pokemon, [e.target.text]);
  };

  render() {
    return (
      <div>
        <Headings.h4>Selected moves</Headings.h4>
        <MoveList>
          {this.props.pokemon.moves.map((move, i) => (
            <li key={i}>
              <a href="#" onClick={this.toggleMove} className="name">
                {move.name}
              </a>
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
