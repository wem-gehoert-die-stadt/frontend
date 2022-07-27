import { css } from '@emotion/core';

export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const centered = css`
  align-items: center;
`;

export const gap = (gapSize = 1) => css`
  & > * + * {
    margin-top: ${gapSize}rem !important;
  }
`;
