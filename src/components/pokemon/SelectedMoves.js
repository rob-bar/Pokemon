import React, { Component } from 'react';
import styled from 'styled-components';
import { Headings } from '../../elements';
import { Colors } from '../../utilities';

export class SelectedMoves extends Component {
  render() {
    const { selectedMoves } = this.props;
    return (
      <div>
        <Headings.h4>selected moves</Headings.h4>
        <MoveList>
          {[...Array(4)].map((item, i) => {
            if (selectedMoves && selectedMoves[i]) {
              return (
                <MoveListItem key={i}>
                  <p className="level">Level Up</p>
                  <p className="name">bla</p>
                </MoveListItem>
              );
            } else {
              return (
                <MoveListItem type="empty" key={i}>
                  <p className="empty">empty</p>
                </MoveListItem>
              );
            }
          })}
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
export default SelectedMoves;
