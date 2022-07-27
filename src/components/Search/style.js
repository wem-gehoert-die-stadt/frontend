import { css } from '@emotion/core';

import { colors, fonts, zIndexes } from '../../styles/tokens';
import fluid from '../../styles/fluid';

export const container = css`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding-top: 2rem;
  width: 100%;
`;

export const containerFloating = (isVisible) => css`
  bottom: 0;
  padding-bottom: ${fluid(2, 3)};
  max-width: 15rem;
  position: fixed;
  transform: ${isVisible ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 300ms ease-in;
  z-index: ${zIndexes.floating};
`;

export const inputContainer = css`
  align-items: center;
  background: white;
  border-color: 1px solid white;
  border-radius: ${fluid(2, 2.25)};
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.15);
  display: flex;
  padding-left: ${fluid(1, 2)};
  padding-right: ${fluid(1.5, 2)};
  transition: box-shadow 200ms ease-in-out;
  width: 100%;

  :focus-within {
    border-color: ${colors.attention2Light};
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  }
`;

export const inputContainerSmall = css`
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
`;

export const input = css`
  background: white;
  border: 0;
  border-radius: ${fluid(2, 2.25)};
  box-shadow: 0;
  color: ${colors.text};
  font-family: ${fonts.headline.family};
  font-size: ${fluid(1.4, 1.5)};
  letter-spacing: 3%;
  line-height: 1;
  outline: none;
  padding-bottom: ${fluid(1, 1.15)};
  padding-left: ${fluid(0.5, 1)};
  padding-top: ${fluid(1, 1.15)};
  width: 100%;

  ::placeholder {
    color: ${colors.textLight};
    letter-spacing: 0.02rem;
  }
`;

export const inputTextContainer = css`
  flex: 1 1 auto;
  font-size: 0;
`;

export const inputSmall = css`
  font-size: ${fluid(1.25, 1.25)};
  padding-bottom: ${fluid(0.75, 0.85)};
  padding-top: ${fluid(0.75, 0.85)};
`;

export const label = css`
  font-family: ${fonts.headline.family};
  font-size: ${fluid(1.1, 1.2)};
  display: block;
  letter-spacing: 0.1rem;
  margin-bottom: ${fluid(0.5, 1.25)};
  text-align: center;
  text-transform: uppercase;
`;

export const labelHidden = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const icon = css`
  flex: 0 0 auto;
  height: ${fluid(1.75, 1.9)};
  margin-left: 0.5rem;
  top: ${fluid(1.25, 0.35)};
  width: ${fluid(1.75, 1.9)};
`;

export const iconSmall = css`
  height: ${fluid(1.25, 1.75)};
  width: ${fluid(1.25, 1.75)};
`;

export const noResultsContainer = css`
  margin-top: ${fluid(2, 4)};
`;

export const noResultsImage = css`
  max-width: 100%;
`;

export const submitButton = css`
  background: transparent;
  border: 0;
  padding: 0;
`;
