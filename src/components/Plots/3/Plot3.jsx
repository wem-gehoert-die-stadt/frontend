import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { cloneDeep } from 'lodash';
import { css } from '@emotion/core';
import { readRemoteFile } from 'react-papaparse';
import { categoryColors, colors } from '../../../styles/tokens';

import Heading from '../../Heading';
import PlotWrapper from '../Wrapper';
import fluid from '../../../styles/fluid';
import useDataContext from '../../../hooks/useDataContext';

const Plot2 = () => {
  const { data, setData } = useDataContext();
  const [plotData, setPlotData] = useState([]);

  const legend = [
    'Staatlich',
    'Genossenschaft und Gemeinnützig',
    'Private Kleinvermieter',
    'Kleines Privateigentum',
    'Großes Privateigentum',
    'Finanzmarkt und Börse',
  ];

  useEffect(() => {
    readRemoteFile('/data/plot-1.csv', {
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
          <Heading
            level="2"
            as="2"
            css={css`
              margin-bottom: ${fluid(0.8, 1)};
            `}
          >
            {data.currentCity}
          </Heading>

          {plotData &&
            plotData.filter((row) => row.city === data.currentCity)[0] && (
              <div
                css={css`
                  display: table;
                  border-collapse: separate;
                  border-spacing: 10px;
                `}
              >
                {legend.map((item, index) => (
                  <div
                    css={css`
                      display: table-row;
                    `}
                  >
                    <div
                      css={css`
                        font-family: 'Jost';
                        font-size: ${fluid(1, 1.5)};
                        display: table-cell;
                        vertical-align: middle;
                        line-height: 1;
                      `}
                    >
                      {item}
                    </div>
                    <div
                      css={css`
                        display: table-cell;
                        width: 40%;
                        min-width: 40%;
                        vertical-align: middle;
                      `}
                    >
                      <div
                        css={css`
                          display: flex;
                        `}
                      >
                        <div
                          style={{
                            width: `${
                              plotData.filter(
                                (row) => row.city === data.currentCity
                              )[0].data[index] * 100
                            }%`,
                            height: '30px',
                            borderRadius: '10px',
                            backgroundColor: categoryColors[index],
                          }}
                          data-tip={`<div style='font-family:"Jost"; font-size: ${fluid(
                            0.8,
                            1
                          )}'>${
                            plotData.filter(
                              (row) => row.city === data.currentCity
                            )[0].data[index] * 100
                          }&nbsp;% ${legend[index]}</div>`}
                          data-html
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </PlotWrapper>

        <PlotWrapper>
          {plotData !== [] &&
            plotData.map(
              (item, index) =>
                index !== 0 && (
                  <button
                    css={css`
                      background-color: ${data.compareCity === item.city
                        ? colors.yellow
                        : `#fff`};
                      cursor: pointer;
                      outline: 0;
                      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                      border-radius: 40px;
                      border: 0;
                      flex: 0;
                      font-family: 'Jost';
                      font-size: ${fluid(1, 1.5)};
                      padding: ${fluid(0.1, 0.5)} ${fluid(1, 2)};
                      margin: ${fluid(0.2, 0.3)};
                      line-height: 1;
                    `}
                    onClick={() => setData({ ...data, compareCity: item.city })}
                    type="button"
                  >
                    {item.city}
                  </button>
                )
            )}

          {plotData &&
            plotData.filter((row) => row.city === data.compareCity)[0] && (
              <div
                css={css`
                  display: table;
                  border-collapse: separate;
                  border-spacing: 10px;
                `}
              >
                {legend.map((item, index) => (
                  <div
                    css={css`
                      display: table-row;
                      line-height: 1;
                    `}
                  >
                    <div
                      css={css`
                        font-family: 'Jost';
                        font-size: ${fluid(1, 1.5)};
                        display: table-cell;
                        vertical-align: middle;
                      `}
                    >
                      {item}
                    </div>
                    <div
                      css={css`
                        display: table-cell;
                        width: 40%;
                        min-width: 40%;
                        vertical-align: middle;
                      `}
                    >
                      <div
                        css={css`
                          display: flex;
                        `}
                      >
                        <div
                          style={{
                            width: `${
                              plotData.filter(
                                (row) => row.city === data.compareCity
                              )[0].data[index] * 100
                            }%`,
                            height: '30px',
                            borderRadius: '10px',
                            backgroundColor: categoryColors[index],
                          }}
                          data-tip={`<div style='font-family:"Jost"; font-size: ${fluid(
                            0.8,
                            1
                          )}'>${
                            plotData.filter(
                              (row) => row.city === data.compareCity
                            )[0].data[index] * 100
                          }&nbsp;% ${legend[index]}</div>`}
                          data-html
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </PlotWrapper>
      </div>
    </>
  );
};

export default Plot2;
