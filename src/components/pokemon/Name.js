import React, { Component } from 'react';
import styled from 'styled-components';
import { Headings, Button } from '../../elements';


export class Name extends Component {
  savePokemon = e => {
    e.preventDefault();
    this.props.addMember(this.props.pokemon);
  };

  render() {
    return (
      <StyledName>
        <img
          src={this.props.pokemon.image}
          alt={this.props.pokemon.name}
          className="image"
        />
        <Headings.h2>{this.props.pokemon.name}</Headings.h2>
        <Button onClick={this.savePokemon}>Save Pokemon</Button>
      </StyledName>
    );
  }
}

const StyledName = styled.div`
  .image {
    width: 100%;
  }
`;

export default Name;
