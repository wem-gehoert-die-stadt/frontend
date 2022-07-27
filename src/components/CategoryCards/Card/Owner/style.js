import { css } from '@emotion/core';

import { colors } from '../../../../styles/tokens';
import fluid from '../../../../styles/fluid';

export const container = css`
  background-color: ${colors.background};
  border-radius: ${fluid(1, 2)};
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
`;

export const containerIsActive = css`
  background-color: ${colors.attention3};
`;

export const header = css`
  text-align: center;
`;

export const section = css`
  padding: ${fluid(1, 1.5)} ${fluid(1.25, 2)};
`;

export const sectionBorder = css`
  border-bottom: 1px solid ${colors.attention1};
`;

export const name = css`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 8ch;
  word-break: break-all;
`;

export const flatsTotal = css`
  color: ${colors.attention1};
  font-weight: 400;
  margin-bottom: ${fluid(0.5, 1)};
`;
