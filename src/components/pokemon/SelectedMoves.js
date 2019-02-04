import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Headings } from '../../elements';
import { Colors } from '../../utilities';

export class SelectedMoves extends Component {
  render() {
    return (
      <div>
        <Headings.h4>selected moves</Headings.h4>
        <MoveList>
          <Query query={SELECTED_MOVES_CLIENT}>
            {({ data: { selectedMoves } }) => {
              console.log(selectedMoves);
              return "";
            }
            }
          </Query>
        </MoveList>
      </div>
    );
  }
}

const MoveList = styled.ul`
  display: grid;
  grid-gap: 10px;
  list-style-type: none;
  grid-template-columns: repeat(2, 1fr);
`;

const MoveListItem = styled.li`
  padding: 0.5rem;
  border: 1px solid ${Colors.blue};

  .level {
    color: ${Colors.yellow};
    font-size: 1rem;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
  }

  .name {
    color: ${Colors.blue};
    margin: 0;
    font-size: 1.4rem;
    margin-right: 5px;
    text-transform: capitalize;
  }

  ${({ type }) => {
    if (type === 'empty') {
      return `
        border: 0;
        background-color: ${Colors.grey};
        display: flex;
        justify-content: center;
        align-items: center;

        .empty {
          color: ${Colors.blue};
        }
      `;
    }
  }}
`;

const SELECTED_MOVES_CLIENT = gql`
  {
    selectedMoves @client
  }
`;
export default SelectedMoves;
