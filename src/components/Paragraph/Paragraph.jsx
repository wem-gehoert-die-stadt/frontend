import { css } from '@emotion/core';
import React from 'react';

import { container } from './style';
import constraintWidth from '../../styles/constraint';

const Paragraph = ({
  children,
  constraint = false,
  center,
  size = 'normal',
  html,
  ...props
}) => {
  const renderedProps = {
    css: [
      container(size),
      constraint && constraintWidth,
      center &&
        css`
          text-align: center;
        `,
    ],
  };

  if (html) {
    renderedProps.dangerouslySetInnerHTML = { __html: html };
  }

  return (
    <p {...renderedProps} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
