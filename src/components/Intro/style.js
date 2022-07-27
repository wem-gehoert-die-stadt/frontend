import { css } from "@emotion/core";

import { colors, fonts } from "../../styles/tokens";
import fluid from "../../styles/fluid";

export const container = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: ${fluid(2, 4)};
  width: 100%;
`;

export const projectName = css`
  color: ${colors.text};
  display: block;
  font-family: ${fonts.headline.family};
  font-size: ${fluid(1.125, 2.15)};
  letter-spacing: 0.01rem;
  text-transform: uppercase;
  margin-bottom: ${fluid(0.5, 1)};
  margin-top: ${fluid(6, 4)};
  position: relative;
`;

export const title = css`
  max-width: 18rem;
  margin-bottom: ${fluid(1.5, 0)};
  margin-top: ${fluid(1.5, 0)};
  position: relative;
`;

export const houseGroup = css`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    align-items: flex-end;
    display: flex;
    flex: 0 0 auto;
    position: relative;
    width: 50%;
  }

  > div:fist-child {
    justify-content: flex-start;
  }

  > div:last-child {
    justify-content: flex-end;
  }
`;
