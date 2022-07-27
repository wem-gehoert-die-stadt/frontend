import React, { forwardRef } from 'react';
import { css } from '@emotion/core';
import {
  container,
  houseGroup,
  projectName as projectNameStyle,
  title as titleStyle,
} from './style';

import Hand from '../Hand';
import Heading from '../Heading';
import House from '../House';
import fluid from '../../styles/fluid';
import mq from '../../styles/mq';
import { zIndexes } from '../../styles/tokens';

const Intro = forwardRef(({ title, projectName, ...props }, ref) => (
  <div css={container} ref={ref} {...props}>
    <small css={projectNameStyle}>{projectName}</small>

    <div
      css={[
        houseGroup,
        css`
          @media ${mq.tablet} {
            margin-bottom: ${fluid(-2, -8)};
          }
        `,
      ]}
    >
      <div
        css={css`
          margin-left: ${fluid(-2, -4)};
        `}
      >
        <House
          type="residential-tall-simple"
          width={98}
          height={109}
          css={css(`
          left: ${fluid(0, 3)};
          position: absolute;
          top: ${fluid(-1, -2)};
        `)}
        >
          <Hand
            type="grab-from-top"
            width={174}
            height={132}
            css={css`
              bottom: ${fluid(2.5, 3)};
              right: ${fluid(-2, -7)};
              z-index: ${zIndexes.houseForeground};
            `}
          />
        </House>

        <House
          type="residential-balkony"
          attention
          width={122}
          height={90}
          css={css(`
          margin-left: ${fluid(-1.25, -2)};
          margin-right: ${fluid(-1.5, -2)};
          z-index: ${zIndexes.houseMiddle};
          `)}
        />

        <House type="residential-tall" width={98} height={109} />
      </div>

      <div
        css={css`
          margin-bottom: ${fluid(-1, -5)};
          margin-right: ${fluid(-1, -3)};
        `}
      >
        <House
          type="monopoly"
          attention
          flipped
          width={55}
          height={38}
          css={css(
            `margin-right: ${fluid(-2, -2)}; margin-bottom: ${fluid(3, 4)};`
          )}
        />
        <House
          type="monopoly"
          attention
          flipped
          width={55}
          height={38}
          css={css(
            `margin-right: ${fluid(-2, -2)}; margin-bottom: ${fluid(2, 3)};`
          )}
        />
        <House
          type="residential-tall-simple"
          flipped
          attention
          width={98}
          height={109}
          css={css`
            margin-right: ${fluid(-1, -2)};
          `}
        />
      </div>
    </div>

    <Heading level={1} css={titleStyle}>
      {title}
    </Heading>

    <div
      css={[
        houseGroup,
        css`
          @media ${mq.tablet} {
            margin-top: ${fluid(-2, -3)};
          }
        `,
      ]}
    >
      <div
        css={css`
          padding-bottom: ${fluid(2, 4)};
        `}
      >
        <House
          type="monopoly"
          width={48}
          height={33}
          css={css`
            margin-right: ${fluid(-2, -3)};
            position: relative;
            z-index: ${zIndexes.houseForeground + 1};
          `}
        />
        <House
          type="residential"
          attention
          flipped
          width={158}
          height={102}
          imageProps={{
            css: css`
              z-index: ${zIndexes.houseForeground};
            `,
          }}
          css={css`
            margin-left: ${fluid(1, 2)};
            margin-bottom: ${fluid(0.5, 1)};
            position: relative;
            z-index: ${zIndexes.houseForeground};
          `}
        >
          <Hand
            type="arm-behind"
            width={60}
            height={87}
            css={css`
              bottom: ${fluid(-1.75, -2.5)};
              left: 0;
              transform: translateX(-70%);
              z-index: ${zIndexes.houseBackground};
            `}
          />

          <Hand
            type="grab-from-behind"
            width={20}
            height={35}
            css={css`
              right: ${fluid(-0.35, -0.75)};
              top: 50%;
              transform: translateY(-50%);
              z-index: ${zIndexes.houseForeground + 1};
            `}
          />
        </House>
      </div>

      <div
        css={css`
          margin-right: ${fluid(-1, -2)};
        `}
      >
        <House
          type="residential-tall-simple"
          flipped
          width={73}
          height={81}
          imageProps={{
            css: css`
              z-index: ${zIndexes.houseForeground};
            `,
          }}
          css={css`
            margin-right: ${fluid(-2, -5)};
            margin-bottom: ${fluid(3, 4)};
          `}
        >
          <Hand
            type="grab-around"
            width={140}
            height={120}
            css={css`
              left: ${fluid(-2, -3)};
              top: ${fluid(0.25, -0.8)};
              z-index: ${zIndexes.houseForeground + 5};
            `}
          />
        </House>

        <House
          type="residential-tall-simple"
          flipped
          width={85}
          height={95}
          css={css`
            z-index: ${zIndexes.houseForeground + 4};
          `}
        />

        <House
          type="monopoly"
          attention
          width={55}
          height={38}
          css={css`
            bottom: ${fluid(2, 4)};
            position: absolute;
            right: ${fluid(3, 12)};
            z-index: ${zIndexes.houseForeground + 2};
          `}
        />

        <House
          type="monopoly"
          attention
          width={55}
          height={38}
          css={css`
            bottom: ${fluid(1.5, 2)};
            position: absolute;
            right: ${fluid(5, 14)};
            z-index: ${zIndexes.houseForeground + 2};
          `}
        />

        <House
          type="monopoly"
          attention
          width={55}
          height={38}
          css={css`
            bottom: ${fluid(0, 1)};
            position: absolute;
            right: ${fluid(7, 24)};
            z-index: ${zIndexes.houseForeground + 5};
          `}
        />
      </div>
    </div>
  </div>
));

export default Intro;
