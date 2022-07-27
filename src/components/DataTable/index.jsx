/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";

import { colors } from "../../styles/tokens";
import { css } from "@emotion/core";
import fluid from "../../styles/fluid";
import useDataContext from "../../hooks/useDataContext";
import { useIntl } from "gatsby-plugin-intl";

export default ({ plotData }) => {
  const intl = useIntl();
  const [tableData, setTableData] = useState();
  const { data } = useDataContext();
  const { selectedInvestor } = data;

  const compare = (a, b) => {
    const stockA = a.stock;
    const stockB = b.stock;

    let comparison = 0;
    if (stockA < stockB) {
      comparison = 1;
    } else if (stockA > stockB) {
      comparison = -1;
    }
    return comparison;
  };

  useEffect(() => {
    const rows = [];
    plotData &&
      plotData.stocks.map((item) => {
        return (
          item.city !== undefined &&
          item.city !== "Wohnungen in ausgewählten Städten" &&
          item.city !== "Wohnungen gesamt" &&
          rows.push({ city: item.city, stock: item.stock })
        );
      });
    setTableData(rows);
  }, [selectedInvestor]);
  return (
    <table
      css={css`
        font-family: "Jost";
        font-size: ${fluid(1, 1.2)};
        border-collapse: collapse;
        margin: ${fluid(2, 3)} 0;
      `}
    >
      {tableData &&
        tableData.sort(compare).map((row, index) => (
          <tr>
            <td
              css={css`
                ${index + 1 < tableData.length &&
                `border-bottom: 2px ${colors.orange} solid;`}
                padding: ${fluid(0.3, 0.6)} ${fluid(0.8, 1)};
              `}
            >
              {index + 1}
            </td>
            <td
              css={css`
                ${index + 1 < tableData.length &&
                `border-bottom: 2px ${colors.orange} solid;`}
                padding: ${fluid(0.3, 0.6)} ${fluid(0.8, 1)};
              `}
            >
              {row.city}
            </td>
            <td
              css={css`
                ${index + 1 < tableData.length &&
                `border-bottom: 2px ${colors.orange} solid;`}
                padding: ${fluid(0.3, 0.6)} ${fluid(0.8, 1)};
              `}
            >
              {isNaN(row.stock) ? `?` : row.stock}{" "}
              {intl.formatMessage({
                id: "owner.flatsTotal",
              })}
            </td>
          </tr>
        ))}
    </table>
  );
};
