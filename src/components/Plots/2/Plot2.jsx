import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { categoryColors, colors } from "../../../styles/tokens";

import { Dropdown } from "semantic-ui-react";
import Heading from "../../Heading";
import PlotWrapper from "../Wrapper";
import ReactTooltip from "react-tooltip";
import { cloneDeep } from "lodash";
import { css } from "@emotion/core";
import fluid from "../../../styles/fluid";
import { readRemoteFile } from "react-papaparse";
import useDataContext from "../../../hooks/useDataContext";
import { useIntl } from "gatsby-plugin-intl";

const Plot2 = () => {
  const intl = useIntl();
  const { data, setData } = useDataContext();
  const [plotData, setPlotData] = useState([]);
  const [selectorHeight, setSelectorHeight] = useState(0);

  const legend = [
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
  }, []);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          column-gap: ${fluid(0.5, 1)};
        `}
      >
        <PlotWrapper>
          <div
            css={css`
              display: flex;
              width: 100%;
              margin-bottom: 2rem;
            `}
          >
            <div
              css={css`
                flex: 1;
                justify-content: flex-end;
              `}
            >
              <Heading
                level="2"
                as="2"
                css={css`
                  margin-bottom: ${fluid(0.8, 1)};
                  text-align: right;
                `}
              >
                {data.currentCity} vs.&nbsp;
              </Heading>
            </div>
            <div
              css={css`
                flex: 1;
              `}
            >
              <Heading
                level="2"
                as="2"
                css={css`
                  margin-bottom: ${fluid(0.8, 1)};
                  text-align: left;
                `}
              >
                {data.compareCity}
              </Heading>

              {plotData !== [] && (
                <Dropdown
                  button
                  floating
                  labeled
                  search
                  text={data.compareCity}
                  onChange={(event, { value }) => {
                    setData((prev) => ({ ...prev, compareCity: value }));
                  }}
                  options={plotData
                    .map(
                      ({ city }) =>
                        city !== "city" &&
                        city !== data.currentCity && {
                          key: city,
                          text: city,
                          value: city,
                        }
                    )
                    .filter(({ value }) => value !== undefined)}
                  css={css`
                    position: relative;
                    .search {
                      padding: ${fluid(0.2, 0.3)} ${fluid(0.6, 1)};
                      font-family: "Jost";
                      font-size: ${fluid(1, 1.3)};
                      border: 4px ${colors.attention2Light} solid;
                      border-radius: 10px;
                      width: 100%;
                    }

                    &[aria-expanded="true"] .menu {
                      display: block;
                    }
                    > input:focus + .divider.text {
                      display: none;
                    }
                    .divider.text {
                      font-family: "Jost";
                      font-size: ${fluid(1, 1.3)};
                      position: absolute;
                      top: 12px;
                      left: 13px;
                    }
                    .menu {
                      display: none;
                      position: absolute;
                      top: 60px;
                      left: 0;
                      overflow: scroll;
                      max-height: ${fluid(4, 10)};
                      font-size: ${fluid(0.8, 1.2)};
                      border-radius: 10px;
                      border: 4px ${colors.attention2Light} solid;
                      width: max-content;
                      font-family: "Jost";
                      background-color: ${colors.attention1Light};
                      & .item,
                      .message {
                        padding: ${fluid(0.2, 0.3)} ${fluid(0.6, 1)};
                      }
                      & .item:hover {
                        background-color: ${colors.attention3};
                        cursor: pointer;
                      }
                    }
                  `}
                />
              )}
            </div>
          </div>
          <table
            css={css`
              margin: 0 auto;
              table-layout: fixed;
            `}
          >
            {plotData &&
              plotData.filter((row) => row.city === data.currentCity)[0] &&
              legend.map((item, index) => (
                <tr>
                  <td
                    css={css`
                      width: 30%;
                    `}
                  >
                    <div
                      css={css`
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                      `}
                    >
                      <div
                        style={{
                          width: `${
                            plotData.filter(
                              (row) => row.city === data.currentCity
                            )[0].data[index] * 100
                          }%`,
                          height: "30px",
                          borderRadius: "10px",
                          backgroundColor: categoryColors[index],
                        }}
                        data-tip={`<div style='font-family:"Jost"; font-size: ${fluid(
                          0.8,
                          1
                        )}'>${(
                          plotData.filter(
                            (row) => row.city === data.currentCity
                          )[0].data[index] * 100
                        ).toFixed(0)}&nbsp;% ${intl.formatMessage({
                          id: `legend.${legend[index]}`,
                        })}</div>`}
                        data-html
                      />
                    </div>
                  </td>
                  <td
                    css={css`
                      font-family: "Jost";
                      font-size: ${fluid(1, 1.5)};
                      line-height: 1;
                      max-width: 30%;
                      text-align: center;
                      padding: 0 ${fluid(1, 2)};
                    `}
                  >
                    {intl.formatMessage({
                      id: `legend.${legend[index]}`,
                    })}
                  </td>
                  <td
                    css={css`
                      width: 30%;
                    `}
                  >
                    <div
                      css={css`
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        style={{
                          width: `${
                            plotData.filter(
                              (row) => row.city === data.compareCity
                            )[0].data[index] * 100
                          }%`,
                          height: "30px",
                          borderRadius: "10px",
                          backgroundColor: categoryColors[index],
                        }}
                        data-tip={`<div style='font-family:"Jost"; font-size: ${fluid(
                          0.8,
                          1
                        )}'>${(
                          plotData.filter(
                            (row) => row.city === data.compareCity
                          )[0].data[index] * 100
                        ).toFixed(0)}&nbsp;% ${intl.formatMessage({
                          id: `legend.${legend[index]}`,
                        })}</div>`}
                        data-html
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </table>
        </PlotWrapper>
      </div>
    </>
  );
};

export default Plot2;
