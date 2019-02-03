import React, { Component } from 'react';
import styled from 'styled-components';
import { Headings } from '../../elements';

export class Member extends Component {
  render() {
    const { member } = this.props;
    if (member == null) return <div>empty</div>;
    return (
      <StyledMember member={member}>
        <img src={member.image} alt={member.name} className="image" />
        <Headings.h2 className="name">{member.name}</Headings.h2>
      </StyledMember>
    );
  }
}
const StyledMember = styled.div`
  .image {
    width: 100%;
  }
  .name {
    color: #fff;
    font-size: 1.25rem;
  }
`;

export default Member;
