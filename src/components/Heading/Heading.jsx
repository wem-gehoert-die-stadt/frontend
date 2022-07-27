import { css } from '@emotion/core';
import React from 'react';

import constraintWidth from '../../styles/constraint';
import mq from '../../styles/mq';
import { h1, h2, h3, h4 } from './style';

const Heading = ({
  children,
  constraint = false,
  center = false,
  level,
  as,
  ...props
}) => {
  const HeadingTag = `h${level}`;
  const styleMapping = {
    h1,
    h2,
    h3,
    h4,
  };

  return (
    <HeadingTag
      css={[
        styleMapping[`h${as || level}`] || null,
        constraint && constraintWidth,
        center &&
          css`
            @media ${mq.tablet} {
              text-align: center;
            }
          `,
      ]}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
