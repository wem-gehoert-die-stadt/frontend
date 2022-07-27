import React from 'react';

import { container, gap as gapStyle, centered as centeredStyle } from './style';

const Stack = ({ centered = false, gap = 1, children, ...props }) => (
  <div css={[container, gapStyle(gap), centered && centeredStyle]} {...props}>
    {children}
  </div>
);

export default Stack;
