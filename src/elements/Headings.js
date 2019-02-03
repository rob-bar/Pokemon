import styled from 'styled-components';
import { Colors } from '../utilities';

export const Headings = {
  h1: styled.h1`
    text-transform: uppercase;
    font-size: 1.6rem;
    color: ${Colors.blue};
  `,
  h2: styled.h2`
    text-transform: uppercase;
    font-size: 1.4rem;
    text-align: center;
    color: ${Colors.yellow};
  `,
  h3: styled.h3`
    font-size: 1rem;
    color: ${Colors.blue};
  `,
  h4: styled.h4`
    text-transform: uppercase;
    text-align: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${Colors.blue};
  `
};
