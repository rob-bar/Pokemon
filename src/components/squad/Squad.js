import React, { Component } from 'react';
import styled from 'styled-components';
import { Headings } from '../../elements';
import { Colors } from '../../utilities';
import Member from './Member';

export class Squad extends Component {
  render() {
    const { members } = this.props;

    return (
      <div>
        <Headings.h2>Selected Squad</Headings.h2>
        <SquadList>
          {members.map((member,i) => (
            <SquadListItem key={i}>
              <Member member={member} />
            </SquadListItem>
          ))}
        </SquadList>
      </div>
    );
  }
}

const SquadList = styled.ul`
  display: grid;
  grid-gap: 20px;
  list-style-type: none;
  grid-template-columns: repeat(6, 1fr);
`;

const SquadListItem = styled.li`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  background: ${Colors.grey};
  color: ${Colors.blue};
`;

export default Squad;
