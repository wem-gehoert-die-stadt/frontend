import { css } from '@emotion/core';

import { categoryColors, fonts } from '../../../styles/tokens';
import fluid from '../../../styles/fluid';
import mq from '../../../styles/mq';

export const container = (id) => css`
  background-color: ${categoryColors[id]};
  border-radius: 0.55rem;
  padding-bottom: ${fluid(1.5, 2)};
  padding-top: ${fluid(1.5, 2)};
  width: 100%;
`;

export const padded = css`
  padding: ${fluid(1.25, 4)};
`;

export const ownerListItem = css`
  flex: 1 0 90%;
  scroll-padding: 0 ${fluid(1.25, 2)};
  scroll-snap-align: start;

  @media ${mq.tablet} {
    flex-basis: 23%;
  }
`;

export const slider = css`
  .swiper-container {
    padding-bottom: 1rem;
  }

  .swiper-slide {
    padding-left: ${fluid(1.25, 1.5)};
    padding-right: ${fluid(1.25, 1.5)};
  }
`;

export const sliderControlContainer = css`
  display: flex;
  margin-bottom: ${fluid(1, 2)};
  padding-left: ${fluid(1, 2)};
  padding-right: ${fluid(1, 2)};

  > *:last-child {
    justify-self: flex-end;
    margin-left: auto;
  }
`;

export const titleContainer = css`
  display: flex;
  justify-content: space-between;
  padding-left: ${fluid(1.25, 1.5)};
  padding-right: ${fluid(1, 1.25)};
`;

export const title = css`
  align-items: center;
  display: flex;
  width: 100%;

  @media ${mq.tablet} {
    justify-self: center;
    justify-content: space-between;
  }
`;

export const name = css`
  text-align: left;
`;

export const intro = css`
  margin-top: ${fluid(1.5, 2)};

  @media ${mq.tablet} {
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const actionIcon = css`
  flex: 0 0 auto;
  height: ${fluid(2.25, 3.5)};
  width: ${fluid(2.25, 3.5)};
`;

export const percentage = css`
  flex: 0 0 auto;
  font-family: ${fonts.headline.family};
  font-size: ${fluid(1.15, 1.7)};
  justify-self: flex-start;
  width: ${fluid(3, 4.5)};

  @media ${mq.tablet} {
    margin-right: 0;
    width: ${fluid(2.25, 3.5)};
  }
`;
