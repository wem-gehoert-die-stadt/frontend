/* eslint-disable import/prefer-default-export */

import { css } from '@emotion/core';

import { colors, fonts } from '../../styles/tokens';
import fluid from '../../styles/fluid';

export const container = (size) => css`
  color: ${colors.text};
  font-family: ${fonts.text.family};
  ${size === 'normal' && `font-size: ${fluid(1.05, 1.55)};`}
  ${size === 'small' && `font-size: ${fluid(0.95, 1.2)};`}
  ${size === 'tiny' && `font-size: ${fluid(0.9, 1.15)};`}
  font-weight: 300;
  letter-spacing: 0.003rem;
  margin-bottom: 0;
  margin-top: 0;
`;
