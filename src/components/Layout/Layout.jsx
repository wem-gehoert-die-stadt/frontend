import { Global } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import { useLang, useTitleTemplate } from 'hooked-head';
import React from 'react';

import Footer from '../Footer';

import { global, fonts } from './style';

const Layout = ({ children }) => {
  const intl = useIntl();
  const { footer } = useStaticQuery(graphql`
    query Layout {
      footer: footerJson {
        items
      }
    }
  `);

  useLang('de');
  useTitleTemplate(`%s | ${intl.formatMessage({ id: 'meta.siteName' })}`);

  return (
    <>
      <Global styles={[global, fonts]} />
      {children}
      <Footer {...footer} />
    </>
  );
};

export default Layout;
