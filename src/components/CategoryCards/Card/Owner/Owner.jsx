import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";

import Criteria from "./Criteria";
import Heading from "../../../Heading";
import Paragraph from "../../../Paragraph";
import resetList from "../../../../styles/reset-list";
import { reviewedInvestors } from "../../../../data/data";
import Link from "gatsby-link";
import { css } from "@emotion/core";

import { colors, fonts } from "../../../../styles/tokens";

import {
  container,
  containerIsActive,
  flatsTotal as flatsTotalStyle,
  header,
  name as nameStyle,
  section,
  sectionBorder,
} from "./style";

const Owner = ({
  name,
  housingstockmin,
  housingstockmax,
  description,
  isActive,
  ...props
}) => {
  const intl = useIntl();

  const {
    criterias: { nodes: criteriaLabels },
  } = useStaticQuery(graphql`
    query {
      criterias: allCriteriasJson {
        nodes {
          ...Critera
        }
      }
    }
  `);

  const criterias = [...Array(5).keys()].reduce((acc, key) => {
    const criteriaMeta = criteriaLabels[key];

    acc.push({
      criteria: criteriaMeta,
      description: props[`cat${key + 1}_${criteriaMeta.name.toLowerCase()}`],
      rating: props[`cat${key + 1}_rating`],
    });

    return acc;
  }, []);
  const showCriterias =
    Array.isArray(criterias) &&
    criterias.some(
      ({ description: criteriaDescription }) =>
        criteriaDescription && criteriaDescription.length > 0
    );

  const localizedFlatsMin = new Number(housingstockmin).toLocaleString("de-DE");
  const localizedFlatsMax = new Number(housingstockmax).toLocaleString("de-DE");
  const unknownHousingStockValues = [0, -1, -2];

  let flatsTotal = `${localizedFlatsMin} - ${localizedFlatsMax} ${intl.formatMessage(
    { id: "owner.flatsTotal" }
  )}`;

  if (housingstockmin === housingstockmax) {
    if (unknownHousingStockValues.includes(parseInt(localizedFlatsMin))) {
      flatsTotal = `${intl.formatMessage({
        id: "owner.unknownHousingStock",
      })}`;
    } else {
      flatsTotal = `${localizedFlatsMin} ${intl.formatMessage({
        id: "owner.flatsTotal",
      })}`;
    }
  }

  return (
    <div css={[container, isActive && containerIsActive]}>
      <header css={header}>
        <div css={[section, sectionBorder]}>
          <Heading level={3} css={nameStyle}>
            {name}
          </Heading>
        </div>

        <div css={[section, sectionBorder]}>
          <Paragraph center css={flatsTotalStyle} size="small">
            {flatsTotal}
          </Paragraph>

          {description && <Paragraph size="small">{description}</Paragraph>}

          {reviewedInvestors.filter(({ name: reviewedInvestorName })=> reviewedInvestorName === name).length > 0 && 
            <Link to={`/`} css={css`
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
              `}>europaweit aggierender Investor</Link>}
        </div>
      </header>

      <div css={section}>
        {showCriterias ? (
          <ul css={resetList}>
            {criterias.map((criteria, index) => {
              if (criteria?.description?.length === 0) {
                return null;
              }

              return (
                <li key={`criteria-${index}`}>
                  <Criteria {...criteria} />
                </li>
              );
            })}
          </ul>
        ) : (
          <Paragraph
            size="small"
            html={intl.formatMessage(
              { id: "owner.emptyCriterias" },
              {
                contactUrl: intl.formatMessage({ id: "study.contactUrl" }),
              }
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Owner;
