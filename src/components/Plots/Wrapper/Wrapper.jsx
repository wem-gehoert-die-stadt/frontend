import React from 'react';
import { css } from '@emotion/core';
import Heading from '../../Heading';
import { colors } from '../../../styles/tokens';
import fluid from '../../../styles/fluid';

export default ({ title = '', subtitle = '', children }) => {
  return (
    <div
      css={css`
        padding: ${fluid(1.2, 2)};
        margin: ${fluid(3, 4)} 0;
        background-color: ${colors.beige};
        border-radius: ${fluid(0.8, 1.2)};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        flex: 1;
      `}
    >
      {title !== '' && (
        <Heading
          level="2"
          as="2"
          css={css`
            margin-bottom: ${fluid(0.8, 1)};
          `}
        >
          {title}
        </Heading>
      )}

      {subtitle !== '' && (
        <Heading
          level="3"
          as="3"
          css={css`
            margin-bottom: ${fluid(1, 2)};
          `}
        >
          {subtitle}
        </Heading>
      )}

      {children}
    </div>
  );
};
