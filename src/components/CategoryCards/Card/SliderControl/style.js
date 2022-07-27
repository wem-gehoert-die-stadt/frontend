import { css } from '@emotion/core';

import { colors, fonts } from '../../../../styles/tokens';
import fluid from '../../../../styles/fluid';

export const container = css`
  background: transparent;
  border: 0;
  padding: 0;
  position: relative;
  width: 6.5rem;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const image = css`
  height: auto;
  width: 100%;
`;

export const imagePrev = css`
  transform: scale(-1, 1);
`;

export const label = css`
  bottom: ${fluid(0.1, 0.5)};
  color: ${colors.attention2};
  font-family: ${fonts.text.family};
  font-size: ${fluid(0.7, 1.1)};
  position: absolute;
  right: ${fluid(1.2, 3)};

  text-transform: uppercase;
  z-index: 10;
`;

export const labelPrev = css`
  left: ${fluid(1.2, 3)};
  right: auto;
`;
