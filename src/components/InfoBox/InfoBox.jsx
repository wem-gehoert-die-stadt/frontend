import React, { useEffect, useState } from "react";

import { colors } from "../../styles/tokens";
import { css } from "@emotion/core";
import fluid from "../../styles/fluid";
import useDataContext from "../../hooks/useDataContext";
import { useIntl } from "gatsby-plugin-intl";

const InfoBox = ({ children }) => {
  const intl = useIntl();
  const { setData } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setData((prev) => ({ ...prev, modalOpen }));
  }, [modalOpen]);

  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
        width: 100%;
        overflow-x: hidden;
      `}
    >
      <button
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
        tabIndex={0}
        css={css`
          background-color: ${colors.attention2Light};
          cursor: pointer;
          outline: 0;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 40px;
          border: 0;
          display: block;
          font-family: "Jost";
          font-size: ${fluid(0.8, 1.2)};
          padding: ${fluid(0.1, 0.5)} ${fluid(1, 2)};
          margin: ${fluid(0.2, 0.3)};
          &:hover {
            background-color: ${colors.attention3};
          }
        `}
      >
        {intl.formatMessage({ id: `infobox.open` })}
      </button>
      {modalOpen === true && (
        <div
          css={css`
            position: fixed;
            width: 100vw;
            height: 100vh;
            z-index: 100;
            background-color: rgba(0.8, 0.8, 0.8, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;
            backdrop-filter: blur(3px);
          `}
          onClick={() => setModalOpen(!modalOpen)}
          onKeyPress={() => null}
          role="button"
          type="button"
        >
          <div
            css={css`
              font-family: "Jost";
              font-size: ${fluid(1.2, 1.2)};
              width: 90vw;
              max-height: 80vh;
              max-width: 20rem;
              background-color: ${colors.attention1Light};
              padding: ${fluid(1, 1)};
              border-radius: 10px;
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              css={css`
                font-size: ${fluid(1, 1)};
                overflow: scroll;
              `}
              dangerouslySetInnerHTML={{ __html: children }}
            />
            <button
              type="button"
              tabIndex={0}
              onClick={() => setModalOpen(!modalOpen)}
              css={css`
                background-color: ${colors.attention2Light};
                &:hover {
                  background-color: ${colors.attention3};
                }
                cursor: pointer;
                outline: 0;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 40px;
                border: 0;
                display: block;
                font-family: "Jost";
                font-size: ${fluid(1, 1.5)};
                padding: ${fluid(0.1, 0.5)} ${fluid(1, 2)};
                margin-top: ${fluid(0.8, 1.2)};
                max-width: min-content;
              `}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: `infobox.close-window` }),
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
