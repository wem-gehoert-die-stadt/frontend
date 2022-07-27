import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import { useTitle } from 'hooked-head';
import React from 'react';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import constraint from '../styles/constraint';
import fluid from '../styles/fluid';

const ImprintPage = () => {
  const intl = useIntl();

  useTitle(intl.formatMessage({ id: 'imprint.title' }));

  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div css={constraint}>
          <Heading
            level="1"
            as="2"
            css={css`
              margin-bottom: ${fluid(1, 2)};
              margin-top: ${fluid(2, 4)};
            `}
          >
            {intl.formatMessage({ id: 'imprint.title' })}
          </Heading>

          <Paragraph>
            Rosa-Luxemburg-Stiftung
            <br />
            Gesellschaftsanalyse und politische Bildung e. V.
            <br />
            <br />
            Straße der Pariser Kommune 8A
            <br />
            10243 Berlin
            <br />
            <br />
            Telefon: +49-(0)30-44310-0
            <br />
            Fax: +49-(0)30-44310230
            <br />
            E-Mail: info@rosalux.org
            <br />
            Internet: www.rosalux.de
            <br />
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            Vertretungsberechtigter Vorstand
          </Heading>

          <Paragraph>
            Daniela Trochowski (Geschäftsführendes Mitglied des Vorstands der
            Rosa-Luxemburg-Stiftung)
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            Registergericht
          </Heading>

          <Paragraph>
            Amtsgericht Charlottenburg, Registernummer 10802 B
          </Paragraph>

          <Paragraph>USt.-IdNr.: DE307670544</Paragraph>

          <Paragraph>
            Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RstV und ViSdP: Stefan
            Thimmel. Adresse wie oben.
          </Paragraph>

          <Paragraph>
            Namentlich gekennzeichnete Beiträge geben nicht zwingend die Meinung
            oder Position der Rosa-Luxemburg-Stiftung wieder. Trotz sorgfältiger
            inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich.
          </Paragraph>

          <Paragraph>
            Namentlich gekennzeichnete Beiträge geben nicht zwingend die Meinung
            oder Position der Rosa-Luxemburg-Stiftung wieder. Trotz sorgfältiger
            inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich.
          </Paragraph>

          <Paragraph>
            Dank geht an die LINKE Düsseldorf, für die Bereitstellung der
            Domain.
          </Paragraph>

          <Paragraph>
            Gestaltung: <a href="https://grafikladen.net">Grafikladen Berlin</a>
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default ImprintPage;
