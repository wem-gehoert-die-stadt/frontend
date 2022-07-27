import React, { useLayoutEffect, useRef, useState } from 'react';

import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import fluid from '../../styles/fluid';
import { colors, fonts } from '../../styles/tokens';
import useWindowResize from '../../hooks/useWindowResize';

const NavBarVertical = () => {
  const intl = useIntl();
  const ref = useRef();
  const windowSize = useWindowResize();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.scrollHeight);
  }, [ref, windowSize]);

  return (
    <div
      css={css`
        position: fixed;
        z-index: 100;
        right: ${height}px;
        top: 0;
        width: 100vh;
        transform-origin: top right;
        transform: rotate(-90deg);
      `}
      ref={ref}
    >
      <ul
        css={css`
          margin: 0;
          padding: 0;
          display: flex;
          list-style: none;
        `}
      >
        {['contact', 'leipzig', 'berlin'].map((item) => (
          <li
            css={css`
              border-top-left-radius: 20px;
              border-top-right-radius: 20px;
              margin: 0 ${fluid(0, 0.5)};
              padding: ${fluid(0, 0.5)} 0;
              background-color: #fff;
              flex: 1;
              display: flex;
              justify-content: center;
            `}
          >
            {item === 'contact' ? (
              <a
                href="mailto:wgds@posteo.de"
                css={css`
                  text-transform: uppercase;
                  font-size: ${fluid(1, 1.2)};
                  font-family: ${fonts.headline.family};
                  color: ${colors.attention1Light};
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  text-decoration: none;
                `}
              >
                {intl.formatMessage({ id: `navigation.${item}` })}
              </a>
            ) : (
              <Link
                to={`/${item}`}
                css={css`
                  text-transform: uppercase;
                  font-size: ${fluid(1, 1.2)};
                  font-family: ${fonts.headline.family};
                  color: ${colors.attention1Light};
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  text-decoration: none;
                `}
              >
                {intl.formatMessage({ id: `navigation.${item}` })}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarVertical;
