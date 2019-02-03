import styled from 'styled-components';
import { Colors } from '../utilities';

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  border: 4px solid ${Colors.blue};
  text-transform: uppercase;
  color: ${Colors.grey};
`;
