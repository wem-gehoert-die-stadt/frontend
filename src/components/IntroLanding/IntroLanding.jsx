import React, { forwardRef } from 'react';
import { css } from '@emotion/core';
import {
  container,
  houseGroup,
  subtitle as subtitleStyles,
  title as titleStyle,
} from './style';

import Heading from '../Heading';
import House from '../House';
import fluid from '../../styles/fluid';
import mq from '../../styles/mq';
import { zIndexes } from '../../styles/tokens';

const Intro = forwardRef(({ title, subtitle, ...props }, ref) => (
  <div css={container} ref={ref} {...props}>
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
        />

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
      css={css`
        max-width: 20rem;
        text-align: center;
      `}
    >
      <small css={subtitleStyles}>{subtitle}</small>
    </div>
  </div>
));

export default Intro;
