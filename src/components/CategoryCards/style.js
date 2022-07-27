import { css } from '@emotion/core';

import fluid from '../../styles/fluid';

export const container = css`
  margin-bottom: ${fluid(2, 4)};
  margin-top: ${fluid(2, 4)};
`;

export const accordionButton = css`
  [data-reach-accordion-button] {
    appearance: none;
    background: transparent;
    border: 0;
    color: currentColor;
    display: block;
    outline: none;
    padding: 0;
    width: 100%;
  }

  [data-reach-accordion-button]:hover,
  [data-reach-accordion-button]:focus {
    cursor: pointer;
  }

  [data-reach-accordion-button]:hover h2 > span:nth-of-type(2),
  [data-reach-accordion-button]:focus h2 > span:nth-of-type(2) {
    text-decoration: underline;
  }
`;
