import React, { useEffect, useState } from "react";

import Heading from "../Heading";
import Map from "../Map";
import Paragraph from "../Paragraph";
import ReactTooltip from "react-tooltip";
import Thumb from "../Thumb";
import constraint from "../../styles/constraint";
import { countries } from "../../data/data";
import { css } from "@emotion/core";
import fluid from "../../styles/fluid";
import { readRemoteFile } from "react-papaparse";
import { useIntl } from "gatsby-plugin-intl";

export default () => {
  const intl = useIntl();

  const [plotData, setPlotData] = useState([]);

  const getThumbRotation = (mark) => {
    if (mark === 1) {
      return `0`;
    } else if (mark === 2) {
      return `45`;
    } else if (mark === 3) {
      return `90`;
    } else if (mark === 4) {
      return `135`;
    } else if (mark === 5) {
      return `180`;
    }
  };

  const convert = (data) => {
    const result = {};
    for (let i = 0; i < data.length; i += 1) {
      const value = data[i][Object.keys(data[i])[0]];
      result[Object.keys(data[i])] = !Number.isNaN(parseInt(value, 10))
        ? parseInt(value, 10)
        : value;
    }
    return result;
  };
  useEffect(() => {
    readRemoteFile(`/data/transparency-${intl.locale}.csv`, {
      config: {
        header: true,
      },
      complete: (results) => {
        const rawData = [];
        results.data.map((row, index) => {
          const data =
            index !== 0 &&
            results.data[0].map(
              (property, i) =>
                i !== 0 && row[i] !== "" && { [property]: row[i] }
            );
          return (
            index !== 0 &&
            data !== false &&
            rawData.push({
              country: row[0],
              data: convert(data),
            })
          );
        });
        setPlotData(rawData);
      },
    });
  }, []);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <>
      <div
        id="data"
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
            {intl.formatMessage({ id: "landing.data.title" })}
          </Heading>

          <Paragraph>
            {intl.formatMessage({ id: "landing.data.intro" })}
          </Paragraph>

          <Heading
            level="3"
            as="3"
            css={css`
              margin-bottom: ${fluid(0, 1)};
              margin-top: ${fluid(1, 2)};
            `}
            center
          >
            {intl.formatMessage({ id: "landing.data.title1" })}
          </Heading>

          <Paragraph>
            {intl.formatMessage({ id: "landing.data.paragraph1" })}
          </Paragraph>

          <Heading
            level="3"
            as="3"
            css={css`
              margin-bottom: ${fluid(0, 1)};
              margin-top: ${fluid(1, 2)};
            `}
            center
          >
            {intl.formatMessage({ id: "landing.data.title2" })}
          </Heading>

          <Paragraph>
            {intl.formatMessage({ id: "landing.data.paragraph2" })}
          </Paragraph>

          <Heading
            level="3"
            as="3"
            css={css`
              margin-bottom: ${fluid(0, 1)};
              margin-top: ${fluid(1, 2)};
            `}
            center
          >
            {intl.formatMessage({ id: "landing.data.title3" })}
          </Heading>

          <Paragraph>
            {intl.formatMessage({ id: "landing.data.paragraph3" })}
          </Paragraph>
        </div>

        <Map>
          {plotData &&
            plotData.map((item) => (
              <div
                style={{
                  top: `${
                    countries.filter(
                      (country) => country.name === item.country
                    )[0].coordinates[0]
                  }%`,
                  left: `${
                    countries.filter(
                      (country) => country.name === item.country
                    )[0].coordinates[1]
                  }%`,
                  marginTop: "-30px",
                  marginLeft: "-30px",
                  position: "absolute",
                  fontFamily: "Jost",
                }}
              >
                <Thumb
                  type="up"
                  width={10}
                  height={10}
                  style={{
                    transform: `rotate(${getThumbRotation(
                      item.data.Gesamt
                    )}deg)`,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    outline: 0,
                    border: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                  data-tip={`<span style='font-family: "Jost"; font-size: ${fluid(
                    0.8,
                    1
                  )};display: flex; align-items: flex-start; flex-direction: column'><span style='font-weight: bold; text-transform: uppercase'>${intl.formatMessage(
                    { id: `countries.${item.country}` }
                  )}</span>
                  <div><span style="font-weight: bold">${intl.formatMessage({
                    id: `transparency.legend.total-score`,
                  })}:</span> ${intl.formatMessage({
                    id: "map.legend.grade",
                  })} ${item.data.Gesamt}</div>
                  ${
                    item.data.Statistik !== 0
                      ? `
                      <div>
                      <span style="font-weight: bold">${intl.formatMessage({
                        id: `transparency.legend.statistics`,
                      })}:</span> ${intl.formatMessage({
                          id: "map.legend.grade",
                        })} ${item.data.Statistik}${
                          item.data.Detail_Statistik !== 0
                            ? `: ${item.data.Detail_Statistik}`
                            : ``
                        }
                      </div>
                    `
                      : ``
                  }
                  ${
                    item.data.Grundbuch !== 0
                      ? `
                      <div>
                      <span style="font-weight: bold">${intl.formatMessage({
                        id: `transparency.legend.real-estate-register`,
                      })}:</span> ${intl.formatMessage({
                          id: "map.legend.grade",
                        })} ${item.data.Grundbuch}${
                          item.data.Detail_Grundbuch !== 0
                            ? `: ${item.data.Detail_Grundbuch}`
                            : ``
                        }
                      </div>
                    `
                      : ``
                  }
                  ${
                    item.data.Unternehmenseigentümer !== 0
                      ? `
                      <div>
                      <span style="font-weight: bold">${intl.formatMessage({
                        id: `transparency.legend.company-register`,
                      })}:</span> ${intl.formatMessage({
                          id: "map.legend.grade",
                        })} 
                        ${item.data.Unternehmenseigentümer}${
                          item.data.Detail_Unternehmenseigentümer !== 0
                            ? `: ${item.data.Detail_Unternehmenseigentümer}`
                            : ``
                        }
                      </div>
                    `
                      : ``
                  }</span>`}
                  data-html
                />
              </div>
            ))}
        </Map>
      </div>
    </>
  );
};
