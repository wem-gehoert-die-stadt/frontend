import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-intl";
import { colors, fonts } from "../../styles/tokens";

import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import Scrollspy from "react-scrollspy";
import { css } from "@emotion/core";
import fluid from "../../styles/fluid";
import mq from "../../styles/mq";
import CITIES from "../../../data/cities.json";
import { Link } from "gatsby";

const NavBar = ({ anchors }) => {
  const intl = useIntl();

  const languageName = {
    en: "EN",
    de: "DE",
  };

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 100;
        display: flex;
        justify-content: center;
      `}
    >
      <Scrollspy
        items={anchors}
        currentClassName={css`
          text-decoration: underline;
        `}
        css={css`
          margin: 0;
          padding: 0 0.3rem 0.3rem 0.3rem;
          background-color: ${colors.attention1Light};
          border-bottom-left-radius: 25px;
          border-bottom-right-radius: 25px;
          border: 4px white solid;
          border-top: 0;
          text-align: center;
        `}
      >
        {anchors !== undefined &&
          anchors.map((anchor) => (
            <li
              css={css`
                display: inline-block;
                margin: 0 ${fluid(0.3, 0.5)};
                font-size: ${fluid(1, 1.2)};
                font-family: ${fonts.text.family};
                color: ${colors.attention1};
              `}
            >
              {anchor === "index" ? (
                <Link to="/">
                  {intl.formatMessage({ id: "anchors.index" })}
                </Link>
              ) : (
                <AnchorLink
                  href={`#${anchor}`}
                  css={css`
                    text-decoration: none;
                    &:hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  {intl.formatMessage({ id: `anchors.${anchor}` })}
                </AnchorLink>
              )}
            </li>
          ))}
        <hr
          css={css`
            display: block;
            height: 1px;
            border: 0;
            color: white;
            background-color: white;
            @media ${mq.tablet} {
              display: none;
            }
          `}
        />
        <li
          css={css`
            display: inline-block;
            padding: 0 ${fluid(0.3, 0.5)};
            font-size: ${fluid(1, 1.2)};
            font-family: ${fonts.text.family};
            color: ${colors.attention1};
            @media ${mq.tablet} {
              border-left: 2px white solid;
              display: inline-block;
            }
          `}
        >
          <div
            css={css`
              position: relative;
              display: inline-block;
              :hover #dropdown-content {
                display: block;
              }
            `}
          >
            <span
              css={css`
                text-decoration: none;
                background-color: ${colors.attention1};
                color: white;
                border-radius: ${fluid(0.2, 0.3)};
                padding: 0 ${fluid(0.2, 0.3)};
                :hover {
                  text-decoration: underline;
                  cursor: pointer;
                }
              `}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "navigation.selectCity" }),
              }}
            />
            <ul
              id="dropdown-content"
              css={css`
                display: none;
                position: absolute;
                background-color: #f9f9f9;
                border-radius: ${fluid(0.2, 0.3)};
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                padding: 12px 16px;
                z-index: 9999 !important;
              `}
            >
              {CITIES.map(({ name, slug }) => (
                <li
                  key={slug}
                  css={css`
                    list-style: none;
                  `}
                >
                  <Link
                    to={`/${slug}`}
                    css={css`
                      text-decoration: none;
                      :hover {
                        text-decoration: underline;
                      }
                    `}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          css={css`
            display: inline-block;
            font-size: ${fluid(1, 1.2)};
            font-family: ${fonts.text.family};
            color: ${colors.attention1};
            padding: 0 ${fluid(0.3, 0.5)};
            @media ${mq.tablet} {
              border-right: 2px white solid;
              display: inline-block;
            }
          `}
        >
          <a
            href="mailto:wgds@posteo.de"
            css={css`
              text-decoration: none;
              :hover {
                text-decoration: underline;
              }
            `}
          >
            {intl.formatMessage({ id: `navigation.contact` })}
          </a>
        </li>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map((language) => (
              <li
                css={css`
                  display: inline-block;
                  font-size: ${fluid(1, 1.2)};
                  font-family: ${fonts.text.family};
                  color: ${colors.attention1};
                `}
              >
                <button
                  key={language}
                  onClick={() => changeLocale(language)}
                  css={css`
                    background: transparent;
                    outline: 0;
                    border: 0;
                    margin: 0 ${fluid(0.3, 0.5)};
                    font-size: ${fluid(1, 1.2)};
                    font-family: ${fonts.text.family};
                    color: ${colors.attention1};
                    text-decoration: ${language === currentLocale
                      ? `underline`
                      : `none`};
                    &:hover {
                      text-decoration: underline;
                      cursor: pointer;
                    }
                  `}
                >
                  {languageName[language]}
                </button>
              </li>
            ))
          }
        </IntlContextConsumer>
      </Scrollspy>
    </div>
  );
};

export default NavBar;
