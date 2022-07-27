import { css } from '@emotion/core';

import { colors } from '../../../../../styles/tokens';
import fluid from '../../../../../styles/fluid';

export const container = css`
  display: flex;
  margin-bottom: ${fluid(1.5, 2)};
`;

export const rating = css`
  flex: 0 0 15%;
`;

export const summaryContainer = css`
  margin-left: ${fluid(0.75, 1.5)};
`;

export const infoButton = css`
  background: transparent;
  border: none;
  color: ${colors.attention1};
  display: inline;
  margin-left: 0.25rem;
  opacity: 0.5;
  position: relative;
  top: 0.05rem;
  padding: 0;

  :hover,
  :focus {
    opacity: 1;
    cursor: pointer;
  }
`;

export const infoIcon = css`
  height: ${fluid(1, 1)};
  width: ${fluid(1, 1)};
`;
