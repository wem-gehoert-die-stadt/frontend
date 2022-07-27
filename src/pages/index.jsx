import React, { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";
import { css } from "@emotion/core";
import { useIntl } from "gatsby-plugin-intl";
import { useTitle } from "hooked-head";
import {
  Provider as DataContextProvider,
  initialState,
} from "../hooks/useDataContext";

import IntroLanding from "../components/IntroLanding";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import NavBarVertical from "../components/NavBarVertical";
import SectionActors from "../components/Sections/actors";
import SectionData from "../components/Sections/data";
import SectionIntro from "../components/Sections/intro";
import SectionLinks from "../components/Sections/links";
import SectionStructure from "../components/Sections/structure";
import { colors } from "../styles/tokens";

const IndexPage = () => {
  const intl = useIntl();
  const [data, setData] = useState({
    currentCity: "Berlin",
    compareCity: "Leipzig",
    selectedInvestor: "fredensborg-heimstaden",
    modalOpen: false,
  });

  const refIntroLanding = useRef(null);
  useTitle(intl.formatMessage({ id: "index.title" }));

  useEffect(() => {
    document.body.style.overflowY = data.modalOpen === true ? `hidden` : ``;
  }, [data.modalOpen]);

  return (
    <Layout>
      <DataContextProvider value={{ ...initialState, data, setData }}>
        <NavBar anchors={["intro", "structures", "actors", "data", "links"]} />
        <IntroLanding
          title={intl.formatMessage({ id: `landing.title` })}
          subtitle={intl.formatMessage({ id: `landing.subtitle` })}
          ref={refIntroLanding}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: ${colors.attention1Light};
          `}
        >
          <SectionIntro />
          <SectionStructure />
          <SectionActors />
          <SectionData />
          <SectionLinks />
        </div>
        <ReactTooltip />
      </DataContextProvider>
    </Layout>
  );
};

export default IndexPage;
