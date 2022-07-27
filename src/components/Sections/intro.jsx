import React, { useEffect, useState } from 'react';
import { cities, reviewedCities } from '../../data/data';

import Heading from '../Heading';
import InfoBox from '../InfoBox';
import Map from '../Map';
import Paragraph from '../Paragraph';
import ReactTooltip from 'react-tooltip';
import { cloneDeep } from 'lodash';
import { colors } from '../../styles/tokens';
import constraint from '../../styles/constraint';
import { css } from '@emotion/core';
import fluid from '../../styles/fluid';
import { readRemoteFile } from 'react-papaparse';
import useDataContext from '../../hooks/useDataContext';
import { useIntl } from 'gatsby-plugin-intl';

export default () => {
  const intl = useIntl();
  const { data, setData } = useDataContext();

  const [plotData, setPlotData] = useState([]);

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
        id="intro"
        css={css`
          margin-top: ${fluid(2, 3)};
        `}
      >
        <div css={constraint}>
          <Paragraph>
            {intl.formatMessage({ id: 'landing.intro1.1' })}
          </Paragraph>
          <Heading
            level={2}
            css={css`
              text-align: center;
              margin: ${fluid(3, 4)} 0;
            `}
          >
            {intl.formatMessage({ id: 'landing.map1.caption' })}
          </Heading>
        </div>
        <div css={constraint}>
          <Map>
            {reviewedCities.map(
              (item) =>
                cities.filter((city) => city.name === item)[0] !==
                  undefined && (
                  <div
                    style={{
                      top: `${
                        cities.filter((city) => city.name === item)[0]
                          .coordinates[0]
                      }%`,
                      left: `${
                        cities.filter((city) => city.name === item)[0]
                          .coordinates[1]
                      }%`,
                      position: 'absolute',
                      fontFamily: 'Jost',
                      width: '30px',
                      height: '30px',
                    }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: colors.yellow,
                        borderRadius: '9000px',
                        position: 'absolute',
                        outline: 0,
                        border: 0,
                      }}
                      data-tip={`<span style='font-family: Jost; font-size: ${fluid(
                        0.8,
                        1
                      )}'>${item}</span>`}
                      data-html
                    />
                  </div>
                )
            )}
          </Map>
          
          <Heading
            level="1"
            as="2"
            css={css`
              margin-bottom: ${fluid(1, 2)};
              margin-top: ${fluid(2, 4)};
            `}
            center
          >
            {intl.formatMessage({ id: 'landing.selectCity' })}
          </Heading>
          <div
            css={css`
              justify-content: center;
              align-items: center;
              margin: ${fluid(3, 4)} 0;
              display: flex;
              flex-wrap: wrap;
            `}
          >
            {plotData !== [] &&
              plotData.map(
                (item, index) =>
                  index !== 0 && (
                    <button
                      css={css`
                        background-color: ${data.currentCity === item.city
                          ? colors.yellow
                          : `#fff`};
                        cursor: pointer;
                        outline: 0;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 40px;
                        border: 0;
                        display: block;
                        font-family: 'Jost';
                        font-size: ${fluid(1, 1.5)};
                        padding: ${fluid(0.1, 0.5)} ${fluid(1, 2)};
                        margin: ${fluid(0.2, 0.3)};
                      `}
                      onClick={() =>
                        setData((prev) => ({ ...prev, currentCity: item.city }))
                      }
                      type="button"
                    >
                      {item.city}
                    </button>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};
