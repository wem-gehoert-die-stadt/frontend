/* eslint-disable react/button-has-type */

import React from 'react';

import { button } from './style';

const Button = ({ type = 'button', href = false, children, ...props }) => {
  const Tag = href ? 'a' : 'button';
  const filteredProps = href
    ? {
        href,
        ...props,
      }
    : {
        type,
        ...props,
      };

  return (
    <Tag css={button} {...filteredProps}>
      {children}
    </Tag>
  );
};

export default Button;
