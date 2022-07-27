import { AccordionButton, AccordionPanel } from "@reach/accordion";
import { Global } from "@emotion/core";
import { useIntl } from "gatsby-plugin-intl";
import React, { useState, useEffect, forwardRef } from "react";
import useSWR from "swr";

import CollapseIcon from "../../../../static/icons/collapse.svg";
import ExpandIcon from "../../../../static/icons/expand.svg";
import Heading from "../../Heading";
import Owner from "./Owner";
import Paragraph from "../../Paragraph";
import SliderControl from "./SliderControl";
import Stack from "../../Stack";
import Swiper from "../../Swiper";

import useCityContext from "../../../hooks/useCityContext";
import { useSiteURL } from "../../../hooks/useSiteURL";

import {
  container,
  ownerListItem,
  slider,
  sliderControlContainer,
  titleContainer,
  title as titleStyle,
  intro as introStyle,
  name as nameStyle,
  actionIcon,
  percentage as percentageStyle,
} from "./style";
import constraintWidth from "../../../styles/constraint";

const Card = forwardRef(
  ({ index, databaseId, name, description, percentage, isExpanded }, ref) => {
    const intl = useIntl();
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const {
      activeOwner: { ownerId },
      cityName,
      citySlug,
      isBeta,
    } = useCityContext();
    const siteURL = typeof window !== "undefined" ? window.location.origin : "";
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data: owners } = useSWR(
      isExpanded
        ? `${siteURL}/.netlify/functions/owners?category=${databaseId}&city=${cityName}`
        : null,
      fetcher
    );

    const hasOwners = owners && Array.isArray(owners) && owners.length > 1;
    let activeOwnerIndex =
      (owners && owners.findIndex(({ id }) => ownerId === id)) || 0;

    if (activeOwnerIndex === -1) {
      activeOwnerIndex = 0;
    }

    useEffect(() => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 500) {
          setSlidesPerView(2);
        }

        if (window.innerWidth > 1000) {
          setSlidesPerView(3);
        }

        if (window.innerWidth > 1400) {
          setSlidesPerView(4);
        }
      }
    }, [slidesPerView]);

    useEffect(() => {
      if (controlledSwiper) {
        controlledSwiper.on("slideChange", () => {
          setIsBeginning(controlledSwiper.isBeginning);
          setIsEnd(controlledSwiper.isEnd);
        });

        // https://github.com/nolimits4web/swiper/issues/3333
        // the initialSlide property doesn't work, so we have to manully scroll
        // to the owner using the controlled swiper instance
        controlledSwiper.slideTo(activeOwnerIndex);
      }
    }, [controlledSwiper, activeOwnerIndex]);

    return (
      <div css={container(index)} ref={ref}>
        <Global styles={slider} />

        <AccordionButton>
          <div css={titleContainer}>
            <Heading level={2} css={titleStyle}>
              <span css={percentageStyle}>{percentage}%</span>

              <span css={[nameStyle, constraintWidth]}>
                {intl.formatMessage({ id: `category${databaseId}.name` })}
              </span>

              {isExpanded ? (
                <CollapseIcon css={actionIcon} />
              ) : (
                <ExpandIcon css={actionIcon} />
              )}
            </Heading>
          </div>
        </AccordionButton>

        <AccordionPanel>
          <Stack>
            <Paragraph constraint css={introStyle} size="small">
              {intl.formatMessage({
                id: `category${databaseId}.${citySlug}`,
              })}
            </Paragraph>
            <div css={sliderControlContainer}>
              {controlledSwiper && !isBeginning && (
                <SliderControl
                  direction="prev"
                  label={intl.formatMessage({ id: "owner.more" })}
                  onClick={() => {
                    if (controlledSwiper) {
                      controlledSwiper.slidePrev();
                    }
                  }}
                />
              )}

              {controlledSwiper && !isEnd && (
                <SliderControl
                  direction="next"
                  label={intl.formatMessage({ id: "owner.more" })}
                  onClick={() => {
                    if (controlledSwiper) {
                      controlledSwiper.slideNext();
                    }
                  }}
                />
              )}
            </div>
          </Stack>

          {!owners && !Array.isArray(owners) ? (
            <Paragraph center size="small">
              {intl.formatMessage({ id: "categories.isLoading" })}
            </Paragraph>
          ) : (
            <>
              {hasOwners ? (
                <Swiper
                  autoHeight
                  centeredSlides={activeOwnerIndex !== 0}
                  slidesPerView={slidesPerView}
                  mousewheel={{ forceToAxis: true }}
                  onSwiper={setControlledSwiper}
                >
                  {owners.map((owner, ownerIndex) => (
                    <div css={ownerListItem} key={`owner-${ownerIndex}`}>
                      <Owner
                        isActive={ownerId && activeOwnerIndex === ownerIndex}
                        {...owner}
                      />
                    </div>
                  ))}
                </Swiper>
              ) : (
                <Paragraph center size="small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: isBeta
                          ? "categories.noOwners.beta"
                          : "categories.noOwners",
                      }),
                    }}
                  />
                </Paragraph>
              )}
            </>
          )}
        </AccordionPanel>
      </div>
    );
  }
);

export default Card;
