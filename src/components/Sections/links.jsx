import Heading from "../Heading";
import Paragraph from "../Paragraph";
import React from "react";
import constraint from "../../styles/constraint";
import { css } from "@emotion/core";
import fluid from "../../styles/fluid";
import { useIntl } from "gatsby-plugin-intl";

export default () => {
  const intl = useIntl();
  return (
    <div
      id="links"
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
          {intl.formatHTMLMessage({ id: "landing.links.title" })}
        </Heading>
        <Paragraph>
          {intl.formatHTMLMessage({ id: "landing.links.intro" })}
          <div
            dangerouslySetInnerHTML={{
              __html: intl.formatHTMLMessage({ id: "landing.links.items" }),
            }}
          />
        </Paragraph>
      </div>
    </div>
  );
};
