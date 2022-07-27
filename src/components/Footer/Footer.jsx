import {
  container,
  innerContainer,
  link,
  logo,
  logoCities,
  rightColumn,
} from "./style";

import Link from "gatsby-link";
import Logo from "../../../static/icons/rls-logo.svg";
import LogoCities from "../../../static/icons/rls-logo-cities.svg";
import React from "react";
import constraint from "../../styles/constraint";
import resetList from "../../styles/reset-list";

const Footer = ({ items = [], ...props }) => {
  const regex = new RegExp("berlin");

  return (
    <footer css={container} {...props}>
      <div css={[innerContainer, constraint]}>
        {items && (
          <ul css={resetList}>
            {items.map(([url, label]) => (
              <li key={`footer-item-${url}`}>
                <Link to={url} css={link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div css={rightColumn}>
          <a href="https://www.rosalux.de/dossiers/wohnen-ist-ein-menschenrecht/wem-gehoert-die-stadt/">
            <LogoCities css={logoCities} />
          </a>

          <Logo css={logo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
