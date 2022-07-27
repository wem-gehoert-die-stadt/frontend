import { css } from '@emotion/core';
import { colors, fonts } from '../../styles/tokens';

import fluid from '../../styles/fluid';

export const container = css`
  background: ${colors.attention2};
  color: white;
  display: flex;
  justify-content: center;
  padding: ${fluid(2.5, 5)} 0 ${fluid(1.5, 2)} 0;
`;

export const innerContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const link = css`
  font-family: ${fonts.headline.family};
  font-size: ${fluid(1, 1.15)};
  line-height: 2;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const rightColumn = css`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-end;
`;

export const logo = css`
  height: auto;
  margin-left: ${fluid(1, 2)};
  margin-top: 0.5rem;
  max-width: ${fluid(4, 6.5)};
`;

export const logoCities = css`
  height: auto;
  max-width: ${fluid(4.5, 7)};
  position: relative;
`;
