import GatsbyLink from 'gatsby-link';
import React from 'react';

import useCityContext from '../../hooks/useCityContext';

const Link = ({ children, to, ...props }) => {
  const { slug } = useCityContext();
  const path = slug ? `/${slug}${to ?? ''}` : to;

  return (
    <GatsbyLink to={path} {...props}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
