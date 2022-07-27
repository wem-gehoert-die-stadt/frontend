import constraint, { constraintWide } from "../../styles/constraint";

import Heading from "../Heading";
import InfoBox from "../InfoBox";
import Paragraph from "../Paragraph";
import Plot1 from "../Plots/1";
import Plot2 from "../Plots/2";
import React from "react";
import { css } from "@emotion/core";
import fluid from "../../styles/fluid";
import { useIntl } from "gatsby-plugin-intl";

export default () => {
  const intl = useIntl();
  return (
    <div
      id="structures"
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div css={constraint}>
        <Heading
          level="2"
          as="2"
          css={css`
            margin-bottom: ${fluid(1, 2)};
            margin-top: ${fluid(2, 4)};
          `}
          center
        >
          {intl.formatMessage({ id: "landing.structures.title" })}
        </Heading>
        <Paragraph>
          {intl.formatMessage({ id: "landing.structures.intro.1" })}
        </Paragraph>
      </div>

      <div css={constraintWide}>
        <Plot1
          title={intl.formatMessage({ id: `landing.structures.chart.title` })}
          subtitle={intl.formatMessage({
            id: `landing.structures.chart.subtitle`,
          })}
        />
      </div>

      <div css={constraint}>
        <Paragraph>
          {intl.formatMessage({
            id: "landing.structures.chart.interpretation",
          })}
        </Paragraph>
      </div>

      <div css={constraintWide}>
        <Plot2 />
      </div>
    </div>
  );
};
