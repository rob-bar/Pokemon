import React, { Component } from 'react';
import styled from 'styled-components';
import { Headings } from '../../elements';
import { Colors } from '../../utilities';

export class Stats extends Component {
  render() {
    const { stats } = this.props;
    return (
      <div>
        <Headings.h4>Stats</Headings.h4>
        <StatsList>
          {stats.map((stat, i) => (
            <StatsListItem key={i}>
              <span className="name">{stat.name}</span>
              <span className="value">{stat.value}</span>
            </StatsListItem>
          ))}
        </StatsList>
      </div>
    );
  }
}
const StatsList = styled.ul`
  display: grid;
  grid-gap: 10px;
  list-style-type: none;
  grid-template-columns: repeat(2, 1fr);
`;

const StatsListItem = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;

  .name {
    color: ${Colors.yellow};
    font-size: 1rem;
    margin-right: 5px;
    text-transform: uppercase;
  }

  .value {
    color: ${Colors.blue};
    font-size: 2.5rem;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export default Stats;
