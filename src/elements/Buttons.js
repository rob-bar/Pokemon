import styled from 'styled-components';
import { Colors } from '../utilities';

export const Button = styled.button`
  padding: .75rem 1rem;
  border: 0;
  font-size: 1.25rem;
  color: #FFF;
  border-radius: 10px;
  text-align: left
  background-color: ${Colors.blue};
  font-family: serif;
  width: 100%;
  display: block;
  text-transform: uppercase;

  ${({ kind }) => {
    if (kind === 'card') {
      return `
        background-color: #FFF;
        color: ${Colors.grey};
      `;
    }

    if (kind === 'search') {
      return `
        color: ${Colors.yellow};
      `;
    }
  }}
`;
