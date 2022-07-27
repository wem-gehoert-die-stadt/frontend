import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useMeta, useTitle } from "hooked-head";
import { css } from "@emotion/core";
import { useInView } from "react-intersection-observer";
import { useIntl } from "gatsby-plugin-intl";
import {
  Provider as CityContextProvider,
  initialState,
} from "../hooks/useCityContext";

import Button from "../components/Button";
import CategoryCards from "../components/CategoryCards";
import Hand from "../components/Hand";
import Heading from "../components/Heading";
import House from "../components/House";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";
import Search from "../components/Search";
import Stack from "../components/Stack";
import { constraintWide } from "../styles/constraint";
import fluid from "../styles/fluid";
import mq from "../styles/mq";
import { useSiteURL } from "../hooks/useSiteURL";
import { colors, fonts, zIndexes } from "../styles/tokens";

const City = ({ pageContext: { citySlug, cityName, categories, isBeta } }) => {
  const intl = useIntl();
  const siteUrl = useSiteURL();

  const [searchIsVisible, setSearchIsVisible] = useState(false);

  const { ref: refSearchIntro, inView: inViewSearchIntro } = useInView({
    rootMargin: "50px",
  });
  const { ref: refSearchCTA, inView: inViewSearchCTA } = useInView({
    rootMargin: "50px",
  });
  const { ref: refIntro, inView: inViewIntro } = useInView({
    initialInView: true,
  });

  const [activeOwner, setActiveOwner] = useState({});

  useEffect(() => {
    setSearchIsVisible(!inViewIntro && !inViewSearchIntro && !inViewSearchCTA);
  }, [inViewSearchIntro, inViewSearchCTA, inViewIntro]);

  const description = intl.formatMessage({
    id: `meta.${citySlug}.description`,
  });

  const {
    ogImage: {
      childImageSharp: {
        fixed: { src: ogImageSrc },
      },
    },
  } = useStaticQuery(graphql`
    query OG_Image {
      ogImage: file(
        sourceInstanceName: { eq: "social-media" }
        absolutePath: { regex: "/og-image.png$/" }
      ) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `);

  useTitle(cityName);
  useMeta({ name: "description", content: description });

  useMeta({
    name: "og:title",
    content: `${cityName} | ${intl.formatMessage({ id: "meta.siteName" })}`,
  });
  useMeta({ name: "og:description", content: description });
  useMeta({ name: "og:image", content: `${siteUrl}${ogImageSrc}` });

  useMeta({
    name: "twitter:title",
    content: `${cityName} | ${intl.formatMessage({ id: "meta.siteName" })}`,
  });
  useMeta({ name: "twitter:description", content: description });
  useMeta({ name: "twitter:card", content: "summary_large_image" });
  useMeta({ name: "twitter:creator", content: "RLS_Cities" });
  useMeta({ name: "twitter:image", content: `${siteUrl}${ogImageSrc}` });

  return (
    <CityContextProvider
      value={{
        ...initialState,
        citySlug,
        cityName,
        activeOwner,
        isBeta,
        setActiveOwner,
      }}
    >
      <Layout>
        <NavBar anchors={["index"]} />
        {isBeta && (
          <div
            css={css`
              position: fixed;
              top: 20px;
              left: 20px;
              background-color: ${colors.attention1};
              z-index: 2000;
              padding: ${fluid(0.2, 0.5)};
              font-size: ${fluid(0.5, 1)};
              color: #fff;
              border-radius: 5px;
              font-family: ${fonts.text.family};
            `}
          >
            BETA Version
          </div>
        )}
        <Intro
          projectName={intl.formatMessage({ id: `intro.${citySlug}.name` })}
          title={intl.formatMessage({ id: `intro.${citySlug}.title` })}
          ref={refIntro}
        />

        <Stack gap={3}>
          <Stack gap={1} centered>
            <Paragraph constraint>
              {intl.formatMessage({ id: `intro.${citySlug}.intro1` })}
            </Paragraph>

            <Paragraph constraint>
              {intl.formatMessage({ id: `intro.${citySlug}.intro2` })}
            </Paragraph>
          </Stack>

          <Stack gap={2}>
            <Search
              placeholder="Blackstone"
              ref={refSearchIntro}
              city={citySlug}
            />
            <div
              css={css`
                align-items: flex-end;
                display: flex;
                overflow: hidden;
                padding-bottom: ${fluid(2, 3)};
                width: 100%;
              `}
            >
              <House
                type="monopoly"
                width={48}
                height={33}
                css={css`
                  margin-bottom: ${fluid(-1, -2)};
                  z-index: ${zIndexes.houseBackground};
                `}
              />

              <House
                type="monopoly"
                attention
                width={55}
                height={38}
                css={css`
                  margin-bottom: ${fluid(1, 2)};
                  margin-right: ${fluid(-1, -2)};
                  z-index: ${zIndexes.houseForeground};
                `}
              />

              <House
                type="monopoly"
                attention
                width={55}
                height={38}
                css={css`
                  margin-right: ${fluid(-1, -2)};
                  z-index: ${zIndexes.houseMiddle};
                `}
              />

              <House
                type="residential"
                width={154}
                height={99}
                css={css`
                  margin-bottom: ${fluid(1, 3)};
                `}
              >
                <Hand
                  type="hand-point-to"
                  width={200}
                  height={110}
                  css={css`
                    position: absolute;
                    right: 80%;
                    top: ${fluid(0, 0.5)};

                    @media ${mq.tablet} {
                      display: none;
                    }
                  `}
                />
              </House>

              <House
                type="monopoly"
                attention
                flipped
                width={55}
                height={38}
                css={css`
                  justify-self: flex-end;
                  margin-left: auto;
                  margin-right: ${fluid(-0.5, -2)};
                `}
              />
            </div>

            <div
              css={[
                constraintWide,
                css`
                  align-self: center;

                  @media ${mq.tablet} {
                    display: grid;
                    grid-gap: ${fluid(1.5, 2)};
                    grid-template-columns: repeat(3, 1fr);
                  }

                  > * + * {
                    margin-top: ${fluid(2, 3)};

                    @media ${mq.tablet} {
                      margin-top: 0;
                    }
                  }
                `,
              ]}
            >
              <Stack gap={0.5}>
                <Heading level={2} as={3}>
                  {intl.formatMessage({ id: "searchIntro.structure.heading" })}
                </Heading>

                <Paragraph>
                  {intl.formatMessage({ id: "searchIntro.structure" })}
                </Paragraph>
              </Stack>

              <Stack gap={0.5}>
                <Heading level={2} as={3}>
                  {intl.formatMessage({ id: "searchIntro.owner.heading" })}
                </Heading>

                <Paragraph>
                  {intl.formatMessage({ id: `searchIntro.${citySlug}.owner` })}
                </Paragraph>
              </Stack>

              <Stack gap={0.5}>
                <Heading level={2} as={3}>
                  {intl.formatMessage({ id: "searchIntro.practices.heading" })}
                </Heading>

                <Paragraph>
                  {intl.formatMessage({ id: "searchIntro.practices" })}
                </Paragraph>
              </Stack>
            </div>
            <Button
              css={css`
                justify-self: center;
                margin-left: auto;
                margin-right: auto;
              `}
              href={intl.formatMessage({ id: "study.url" })}
            >
              {intl.formatMessage({ id: "searchIntro.cta" })}
            </Button>
            <Stack gap={1.5} centered>
              <Heading level={2} center constraint>
                {intl.formatMessage({ id: "categories.title" })}
              </Heading>

              <Paragraph
                html={intl.formatMessage({
                  id: `categories.${citySlug}.intro`,
                })}
                constraint
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack centered>
          <iframe
            title={`Karte der Eigentümer in ${cityName}`}
            src={`https://map.wemgehoertdiestadt.de/?${citySlug}`}
            loading="lazy"
            style={{
              width: "100%",
              maxWidth: "28rem",
              margin: "1rem 0",
              height: "100vh",
              maxHeight: "16rem",
              border: "none",
            }}
          />
        </Stack>

        <CategoryCards categories={categories} />

        <Stack
          centered
          css={css`
            margin-bottom: ${fluid(2, 1)};
            margin-top: ${fluid(4, 6)};
            position: relative;
          `}
        >
          <Heading
            level={2}
            constraint
            center
            css={css`
              padding-left: ${fluid(4.5, 2)};
              padding-right: ${fluid(4.5, 2)};
              text-align: center;
            `}
          >
            {intl.formatMessage({ id: "cta.title" })}
          </Heading>

          <div
            css={css`
              left: 0;
              overflow-x: hidden;
              position: absolute;
              top: 0;
            `}
          >
            <House
              type="residential-tall-simple"
              attention
              width={98}
              height={109}
              css={css`
                margin-left: ${fluid(-4, 2)};
              `}
            />
            <House
              type="monopoly"
              attention
              width={55}
              height={38}
              css={css`
                margin-left: ${fluid(0.25, 3)};
              `}
            />
            <House
              type="monopoly"
              attention
              width={55}
              height={38}
              css={css`
                margin-left: ${fluid(0.5, 4)};
                margin-top: ${fluid(-1, -3)};
              `}
            />
          </div>

          <div
            css={css`
              align-items: flex-end;
              display: flex;
              flex-direction: column;
              overflow-x: hidden;
              position: absolute;
              right: 0;
              top: 0;
            `}
          >
            <House
              type="residential-tall"
              attention
              flipped
              width={99}
              height={109}
              css={css`
                margin-right: ${fluid(-3, -3)};
              `}
            >
              <Hand
                type="questionmark"
                width={23}
                height={42}
                css={css`
                  right: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                `}
              />
              <Hand type="questionmark" width={23} height={42} />
              <Hand type="questionmark" width={23} height={42} />
            </House>

            <House
              type="residential"
              width={154}
              height={99}
              css={css`
                margin-right: ${fluid(-6.75, -8)};
              `}
            />
            <House
              type="residential-balkony"
              attention
              flipped
              width={122}
              height={90}
              css={css`
                margin-right: ${fluid(-6.5, -8)};
              `}
            />
          </div>

          <div
            css={css`
              padding-top: 1rem;
            `}
          >
            <Search
              placeholder={intl.formatMessage({ id: "search.placeholder" })}
              ref={refSearchCTA}
            />
          </div>

          <Search
            placeholder={intl.formatMessage({ id: "search.placeholder" })}
            floating
            floatingIsVisible={searchIsVisible}
          />
        </Stack>
      </Layout>
    </CityContextProvider>
  );
};

export default City;
