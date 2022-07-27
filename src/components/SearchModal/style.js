/* eslint-disable import/prefer-default-export */

import { css } from '@emotion/core';

import { colors } from '../../styles/tokens';
import fluid from '../../styles/fluid';

export const container = css`
  display: flex;
  justify-content: center;
  padding: ${fluid(4, 1)} ${fluid(0.75, 2.2)} 1rem ${fluid(0.75, 2.2)};
  width: 100%;
`;

export const close = css`
  background-color: ${colors.attention2Light};
  border: 0;
  border-radius: 50%;
  box-shadow: none;
  color: white;
  height: ${fluid(2.5, 3)};
  position: absolute;
  right: ${fluid(1.25, 2)};
  top: ${fluid(1.25, 2)};
  width: ${fluid(2.5, 3)};

  :focus,
  :hover {
    background-color: ${colors.attention2};
    cursor: pointer;
  }
`;
