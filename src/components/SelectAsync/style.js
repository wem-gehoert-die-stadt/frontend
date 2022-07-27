/* eslint-disable import/prefer-default-export */

import fluid from '../../styles/fluid';
import { fonts, colors } from '../../styles/tokens';

export const baseFonts = {
  fontFamily: fonts.text.family,
  fontSize: fluid(1.15, 1.15),
};

export const select = {
  container: (styles) => ({
    ...styles,
    ...baseFonts,
    border: 0,
    flex: '1 0 auto',
    paddingLeft: 0,
    paddingRight: 0,
  }),

  control: (styles) => ({
    ...styles,
    border: 0,
    borderRadius: 0,
    boxShadow: 0,
    outline: 'none',
  }),

  input: (styles) => ({
    ...styles,
    color: 'black',
    paddingBottom: fluid(0.35, 0.65),
    paddingTop: fluid(0.35, 0.65),
  }),

  placeholder: (styles) => ({
    ...styles,
    color: 'black',
    fontFamily: fonts.text.family,
    fontSize: fluid(1.15, 1.25),
  }),

  valueContainer: (styles) => ({
    ...styles,
    paddingLeft: 0,
    '&:hover': {
      border: 0,
    },
  }),

  menu: (styles) => ({
    ...styles,
    marginTop: 0,
  }),

  menuList: (styles) => ({
    ...styles,
    padding: 0,
  }),

  option: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderBottom: `1px solid ${colors.background}`,
    fontFamily: fonts.text.family,
    '&:hover': {
      backgroundColor: colors.attention2,
      color: 'white',
    },
  }),
};
