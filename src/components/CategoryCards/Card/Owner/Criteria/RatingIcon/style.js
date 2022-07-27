import { css } from '@emotion/core';

import fluid from '../../../../../../styles/fluid';

export const portrait = css`
  height: auto;
  width: ${fluid(1.5, 1.75)};
`;

export const landscape = css`
  height: auto;
  width: ${fluid(2.2, 2.5)};
`;
