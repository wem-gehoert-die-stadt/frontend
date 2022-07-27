import { css } from "@emotion/core";

import { colors, fonts } from "../../styles/tokens";
import fluid from "../../styles/fluid";

const base = css`
  margin-bottom: 0;
  margin-top: 0;
`;

export const h1 = css`
  ${base}

  color: ${colors.attention1};
  font-family: ${fonts.text.family};
  font-size: ${fluid(2.35, 4)};
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
  z-index: 20;
`;

export const h2 = css`
  ${base}

  font-family: ${fonts.headline.family};
  font-size: ${fluid(1.5, 3)};
  font-weight: 400;
  letter-spacing: 3%;
  line-height: 1.2;
`;

export const h3 = css`
  ${base}

  font-family: ${fonts.text.family};
  font-size: ${fluid(1.2, 1.3)};
  font-weight: 400;
  letter-spacing: ${fluid(0.05, 0.1)};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const h4 = css`
  ${base}

  font-family: ${fonts.headline.family};
  font-size: ${fluid(0.95, 1)};
  font-weight: 400;
  letter-spacing: 0.01rem;
  line-height: 1.2;
  text-transform: uppercase;
`;
