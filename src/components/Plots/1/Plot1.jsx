import React, { useEffect, useState } from "react";

import Heading from "../../Heading";
import InfoBox from "../../InfoBox";
import PlotWrapper from "../Wrapper";
import ReactTooltip from "react-tooltip";
import { categoryColors } from "../../../styles/tokens";
import { cloneDeep } from "lodash";
import { css } from "@emotion/core";
import fluid from "../../../styles/fluid";
import mq from "../../../styles/mq";
import { readRemoteFile } from "react-papaparse";
import useDataContext from "../../../hooks/useDataContext";
import { useIntl } from "gatsby-plugin-intl";

const Plot1 = ({ title = "", subtitle = "" }) => {
  const intl = useIntl();
  const [plotData, setPlotData] = useState([]);
  const { data } = useDataContext();

  const legend = [
    "owner-occupier",
    "state-owned",
    "cooperative",
    "small-private-owner",
    "big-private-owner",
    "financial-market",
  ];

  useEffect(() => {
    readRemoteFile("/data/plot-1.csv", {
      config: {
        header: false,
      },
      complete: (results) => {
        const rawData = [];
        results.data.map((row) => {
          const rowData = cloneDeep(row);
          return rawData.push({ city: row[1], data: rowData.slice(2) });
        });
        setPlotData(rawData);
      },
    });
    ReactTooltip.rebuild();
  }, []);

  return (
    <>
      <PlotWrapper>
        {title !== "" && (
          <Heading
            level="2"
            as="2"
            css={css`
              margin-bottom: ${fluid(0.8, 1)};
            `}
          >
            {title}
          </Heading>
        )}

        {subtitle !== "" && (
          <Heading
            level="3"
            as="3"
            css={css`
              margin-bottom: ${fluid(1, 2)};
            `}
          >
            {subtitle}
          </Heading>
        )}

        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: ${fluid(0.8, 1.2)};
            @media ${mq.tablet} {
              flex-wrap: nowrap;
            }
          `}
        >
          {legend.map((item, index) => (
            <div
              css={css`
            display: flex;
            flex-direction: row;
            margin-right ${fluid(0.8, 1.2)};
            align-items: center;
            font-size : ${fluid(0.8, 1)};
            font-family: 'Jost';
            line-height: 1;
            `}
            >
              <div
                css={css`
                  border-radius: 9999px;
                  width: ${fluid(0.4, 0.8)};
                  height: ${fluid(1.5, 2)};
                  margin-right: ${fluid(0.2, 0.4)};
                  background-color: ${categoryColors[index]};
                `}
              />
              {intl.formatMessage({
                id: `legend.${legend[index]}`,
              })}
            </div>
          ))}
        </div>

        <div
          css={css`
            display: table;
            border-collapse: separate;
            border-spacing: 10px;
          `}
        >
          {plotData !== [] &&
            plotData.map(
              (d, index) =>
                index !== 0 && (
                  <div
                    css={css`
                      display: table-row;
                      vertical-align: top;
                    `}
                  >
                    <span
                      css={css`
                        font-family: "Jost";
                        font-size: ${fluid(1, 1.5)};
                        display: table-cell;
                        vertical-align: top;
                        text-align: right;
                        line-height: 1.1;
                        text-decoration: ${d.city === data.currentCity &&
                        `underline`};
                      `}
                    >
                      {d.city}
                    </span>
                    <div
                      css={css`
                        display: table-cell;
                        vertical-align: top;
                        width: 100%;
                      `}
                    >
                      <div
                        css={css`
                          display: flex;
                        `}
                      >
                        {d.data.map((i, index2) => (
                          <div
                            style={{
                              width: `${i * 100}%`,
                              height: "30px",
                              borderRadius: "10px",
                              backgroundColor: categoryColors[index2],
                            }}
                            data-tip={`<div style='font-family:"Jost"; font-size: ${fluid(
                              0.8,
                              1
                            )}'>${(i * 100).toFixed(
                              0
                            )}&nbsp;% ${intl.formatMessage({
                              id: `legend.${legend[index2]}`,
                            })}</div>`}
                            data-html
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
        <InfoBox>
          {intl.formatHTMLMessage({ id: "landing.structures.methodology" })}
        </InfoBox>
      </PlotWrapper>
    </>
  );
};

export default Plot1;
