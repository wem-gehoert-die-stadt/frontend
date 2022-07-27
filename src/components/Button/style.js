/* eslint-disable import/prefer-default-export */

import { css } from '@emotion/core';
import { colors, fonts } from '../../styles/tokens';

import fluid from '../../styles/fluid';

export const button = css`
  background: black;
  border: 0;
  border-radius: 0.65rem;
  color: ${colors.background};
  font-family: ${fonts.text.family};
  font-size: ${fluid(0.9, 1.25)};
  max-width: 10rem;
  outline: none;
  padding: ${fluid(0.65, 0.85)} ${fluid(0.75, 1.25)};
  text-align: center;
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${colors.attention2Light};
    color: ${colors.text};
    cursor: pointer;
  }
`;
