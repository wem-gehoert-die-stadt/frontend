import React, { useEffect, useState } from "react";
import { cities, reviewedInvestors } from "../../data/data";
import constraint, { constraintCenter } from "../../styles/constraint";

import DataTable from "../DataTable";
import Heading from "../Heading";
import InfoBox from "../InfoBox";
import Map from "../Map";
import Paragraph from "../Paragraph";
import ReactTooltip from "react-tooltip";
import { colors } from "../../styles/tokens";
import { css } from "@emotion/core";
import fluid from "../../styles/fluid";
import { readRemoteFile } from "react-papaparse";
import useDataContext from "../../hooks/useDataContext";
import { useIntl } from "gatsby-plugin-intl";

export default () => {
  const intl = useIntl();
  const { setData, data } = useDataContext();
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
    readRemoteFile("/data/actors.csv", {
      config: {
        header: true,
      },
      complete: (results) => {
        const rawData = [];
        results.data.map((row, index) => {
          const stocks =
            index !== 0 &&
            results.data[0].map((city, i) =>
              i !== 0 && row[i] !== ""
                ? {
                    city,
                    stock: parseInt(row[i], 10),
                  }
                : {}
            );
          return (
            index !== 0 &&
            rawData.push({
              actor: row[0],
              totalStock: parseInt(row[20], 10),
              stocks,
            })
          );
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
        id="actors"
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
            {intl.formatMessage({ id: "landing.actors.title" })}
          </Heading>
          <Paragraph>
            {intl.formatMessage({ id: "landing.actors.intro" })}
          </Paragraph>
        </div>

        <div css={constraint}>
          <Heading
            level="3"
            as="3"
            css={css`
              margin-bottom: ${fluid(1, 2)};
              margin-top: ${fluid(2, 4)};
            `}
            center
          >
            {intl.formatMessage({ id: "landing.actors.chart.title" })}
          </Heading>
        </div>
        <div css={constraintCenter}>
          {reviewedInvestors.map((item) => (
            <button
              css={css`
                background-color: ${data.selectedInvestor === item.slug
                  ? colors.yellow
                  : `#fff`};
                cursor: pointer;
                outline: 0;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 40px;
                border: 0;
                flex: 0;
                font-family: "Jost";
                font-size: ${fluid(1, 1.5)};
                padding: ${fluid(0.1, 0.5)} ${fluid(1, 2)};
                margin: ${fluid(0.2, 0.3)};
                line-height: 1;
                white-space: nowrap;
              `}
              onClick={() =>
                setData((prev) => ({ ...prev, selectedInvestor: item.slug }))
              }
              type="button"
            >
              {item.name}
            </button>
          ))}
        </div>
        <Map>
          {plotData &&
            plotData.filter((i) => i.actor === data.selectedInvestor)[0] &&
            plotData
              .filter((i) => i.actor === data.selectedInvestor)[0]
              .stocks.map(
                (stock) =>
                  cities.filter((city) => city.name === stock.city)[0] !==
                    undefined && (
                    <div
                      style={{
                        top: `${
                          cities.filter((city) => city.name === stock.city)[0]
                            .coordinates[0]
                        }%`,
                        left: `${
                          cities.filter((city) => city.name === stock.city)[0]
                            .coordinates[1]
                        }%`,
                        position: "absolute",
                        fontFamily: "Jost",
                      }}
                    >
                      <div
                        style={{
                          width: `${
                            (isNaN(stock.stock)
                              ? 1
                              : stock.stock /
                                plotData.filter(
                                  (i) => i.actor === data.selectedInvestor
                                )[0].totalStock) * 60
                          }px`,
                          height: `${
                            (isNaN(stock.stock)
                              ? 1
                              : stock.stock /
                                plotData.filter(
                                  (i) => i.actor === data.selectedInvestor
                                )[0].totalStock) * 60
                          }px`,
                          // marginTop: `-${
                          //   (stock.stock /
                          //     plotData.filter(
                          //       (i) => i.actor === data.selectedInvestor
                          //     )[0].totalStock) *
                          //   30
                          // }px`,
                          // marginLeft: `-${
                          //   (stock.stock /
                          //     plotData.filter(
                          //       (i) => i.actor === data.selectedInvestor
                          //     )[0].totalStock) *
                          //   30
                          // }px`,
                          backgroundColor: isNaN(stock.stock)
                            ? `transparent`
                            : colors.yellow,
                          borderRadius: "9000px",
                          position: "absolute",
                          outline: 0,
                          border: 0,
                          cursor: "pointer",
                        }}
                        data-tip={`<span style='font-family: "Jost"; font-size: ${fluid(
                          0.8,
                          1
                        )}; display: flex; align-items: center; flex-direction: column'><span><strong>${
                          stock.city
                        }</strong></span><span>${
                          isNaN(stock.stock) ? `?` : stock.stock
                        } ${intl.formatMessage({
                          id: "owner.flatsTotal",
                        })}</span></span>`}
                        data-html
                      >
                        {isNaN(stock.stock) && `?`}
                      </div>
                    </div>
                  )
              )}
        </Map>
        <InfoBox>
          {intl.formatHTMLMessage({ id: "landing.actors.methodology" })}
        </InfoBox>

        <div css={constraintCenter}>
          <div>
            <Heading
              level="3"
              as="3"
              css={css`
                margin-bottom: ${fluid(0.3, 0.8)};
                display: block;
              `}
              center
            >
              {
                reviewedInvestors.filter(
                  ({ slug }) => slug === data.selectedInvestor
                )[0].name
              }
            </Heading>
            <div
              css={css`
                display: block;
              `}
            >
              {plotData &&
                plotData.filter((i) => i.actor === data.selectedInvestor)[0] &&
                plotData.filter((i) => i.actor === data.selectedInvestor)[0]
                  .stocks && (
                  <DataTable
                    plotData={
                      plotData.filter(
                        (i) => i.actor === data.selectedInvestor
                      )[0]
                    }
                  />
                )}
            </div>
          </div>
        </div>

        <div css={constraint}>
          <Paragraph>
            {intl.formatMessage({ id: "landing.actors.chart.interpretation" })}
          </Paragraph>
        </div>
      </div>
    </>
  );
};
