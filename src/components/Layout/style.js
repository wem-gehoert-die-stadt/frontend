import { css } from '@emotion/core';

import { colors } from '../../styles/tokens';

import ArchiveNarrowWoff2 from '../../../static/fonts/Archivo_Narrow/ArchivoNarrow-Regular.woff2';
import ArchiveNarrowWoff from '../../../static/fonts/Archivo_Narrow/ArchivoNarrow-Regular.woff';

import JostWoff2Variable from '../../../static/fonts/Jost/Jost-VariableFont_wght.woff2';

import JostWoff2Regular from '../../../static/fonts/Jost/static/Jost-Regular.woff2';
import JostWoffRegular from '../../../static/fonts/Jost/static/Jost-Regular.woff';

import JostWoff2Light from '../../../static/fonts/Jost/static/Jost-Light.woff2';
import JostWoffLight from '../../../static/fonts/Jost/static/Jost-Light.woff';

export const global = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.background};
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;

    @media screen and (min-width: 25em) {
      font-size: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400));
    }

    @media screen and (min-width: 50em) {
      font-size: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400));
    }
  }

  a {
    color: currentColor;
  }
`;

export const fonts = css`
  @font-face {
    font-display: swap;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url('${JostWoff2Variable}') format('woff2-variations'),
      url('${JostWoff2Regular}') format('woff2'),
      url('${JostWoffRegular}') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 300;
    src: url('${JostWoff2Variable}') format('woff2-variations'),
      url('${JostWoff2Light}') format('woff2'),
      url('${JostWoffLight}') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Archivo Narrow';
    font-style: normal;
    font-weight: 400;
    src: url('${ArchiveNarrowWoff2}') format('woff2'),
      url('${ArchiveNarrowWoff}') format('woff');
  }
`;
