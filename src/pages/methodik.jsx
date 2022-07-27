import { css } from "@emotion/core";
import { useIntl } from "gatsby-plugin-intl";
import { useTitle } from "hooked-head";
import React from "react";

import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import constraint from "../styles/constraint";
import fluid from "../styles/fluid";
import { fonts } from "../styles/tokens";

const MethodologyPage = () => {
  const intl = useIntl();

  useTitle(intl.formatMessage({ id: "methodology.title" }));

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
            {intl.formatMessage({ id: "methodology.title" })}
          </Heading>

          <Paragraph>
            Der Immobilienmarkt ist vielfältig, intransparent und ständig im
            Wandel. Die auf www.wemgehoertdiestadt.de zugänglich gemachten Daten
            sind immer eine Bestandsaufnahme, oft auf Sekundärquellen angewiesen
            und teilweise Schätzungen sowie Werturteile. Unsere Quellen sind
            nach Zuverlässigkeit und Aktualität sortiert, bewertet und mit
            Sorgfalt ausgewertet. Trotzdem können wir deren Richtigkeit nicht
            garantieren. Alle Ergebnisse sind lediglich Illustration und
            Anhaltspunkt und keine verlässliche Datenquelle. Eine maschinelle
            Auslese und Auswertung (Crawling) und die kommerzielle Verwendung
            der Daten ist nicht gestattet.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            DIE EIGENTÜMERSTRUKTUR
          </Heading>

          <Paragraph>
            Die Daten stammen größtenteils aus der Gebäude- und Wohnungszählung
            von 2011. Die Gebäude- und Wohnungszählung unterscheidet zwischen
            anderen Investoren (Banken, etc.) Wohnungsunternehmen und
            Privateigentümern. Die Einordnung als Wohnungsunternehmen oder
            Privateigentümer basiert auf einer Selbsteinschätzung. Eine Trennung
            zwischen “groß” und “klein” erfolgt nicht. Wir schätzen den Anteil
            der sieben großen börsennotierten Wohnungsunternehmen anhand ihrer
            Jahresabschlüsse. Weil dort meisten nur Zahlen für den “Großraum” zu
            finden sind, plausibilisieren wir die Angaben wo möglich mit
            Mietinseraten und Rückmeldungen von Mieter:innen oder Expert:innen
            aus der jeweiligen Stadt. Außerdem ordnen wir nicht-aufgeteilte
            Mehrfamilienhäuser mit 7 oder mehr Wohnungen als “groß” ein. Die so
            errechneten Anteile sind, wo möglich, bis 2020 fortgeschrieben und
            auf die aktualisierten Wohnungszahlen hochgerechnet. Die folgende
            Tabelle gibt einen groben Überblick über den Stand unserer
            Informationen/Quellen für Berlin und die sechs weiteren deutschen
            Städte:
          </Paragraph>

          <table
            css={css`
              font-family: ${fonts.text.family};
              font-size: ${fluid(0.5, 1)};
              border: 1px solid black;
              border-collapse: collapse;
              line-height: 1;
            `}
          >
            <thead>
              <tr
                css={css`
                  font-weight: bold;
                `}
              >
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>B&ouml;rse + Finanzmarkt</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Gro&szlig; + Privat</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Klein + Privat</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Genossenschaften + Gemeinn&uuml;tzig</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Staat</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Selbstnutzer</p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Berlin</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>B&ouml;rsennotierte 2020</p>
                </td>
                <td
                  colspan="2"
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>GWZ (2011) + Aufteilung bis 2020</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Genossenschaften, 2019</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Landeseigene + Bima, 2019</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Mikrozensus 2018</p>
                </td>
              </tr>
              <tr>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Leipzig</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>B&ouml;rsennotierte 2020 + Mietinserate</p>
                </td>
                <td
                  colspan="2"
                  rowspan="6"
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>GWZ (2011)</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Genossenschaften, 2019</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>LWB &gt; 2011</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Mikrozensus 2018</p>
                </td>
              </tr>
              <tr>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Hamburg</p>
                </td>
                <td
                  rowspan="4"
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>B&ouml;rsennotierte 2020 (teilweise nur Gro&szlig;raum)</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Genossenschaften, 2019</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>SAGA &gt; 2011</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Mikrozensus 2018</p>
                </td>
              </tr>
              <tr>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>M&uuml;nchen</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Genossenschaften, 2019</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>GEWOFAG/GWG &gt; 2011</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Neubau ca. 50% als ETW</p>
                </td>
              </tr>
              <tr>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>D&uuml;sseldorf</p>
                </td>
                <td
                  rowspan="3"
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>GWZ (2011)</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>GWZ (2011)</p>
                </td>
              </tr>
              <tr>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Frankfurt am Main</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>ABG &gt; 2011 (L&uuml;cke zu GWZ unklar)</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>GWZ (2011)</p>
                </td>
              </tr>
              <tr>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>Erfurt</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>TAG 2020 + Mietinserate</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>KoWo &lt; 2011</p>
                </td>
                <td
                  css={css`
                    padding: ${fluid(0.2, 0.3)};
                    border: 1px solid black;
                  `}
                >
                  <p>GWZ (2011)</p>
                </td>
              </tr>
            </tbody>
          </table>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            DIE ZAHL DER WOHNEINHEITEN
          </Heading>

          <Paragraph>
            Für die Zahl der Wohneinheiten nutzen wir folgenden Quellen
            (sortiert nach der Qualität):
          </Paragraph>

          <ul>
            <li>
              <Paragraph>
                Konzernabschluss für 2019 (teilweise auch 2018, teilweise Summe
                aus Einzelabschlüssen, teilweise für Berlin mit Umland)
              </Paragraph>
            </li>

            <li>
              <Paragraph>
                Schätzung basierend auf Jahresabschlüssen oder Portfolio auf der
                Unternehmenswebsite
              </Paragraph>
            </li>

            <li>
              <Paragraph>
                Schätzung basierend auf Transaktionsmitteilungen (IZ-Research),
                Presseberichten und/oder Mietangeboten (Information von
                MieterInnen, Internetportale)
              </Paragraph>
            </li>
          </ul>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
              text-transform: uppercase;
            `}
          >
            Akteure und ihre Bewertung
          </Heading>

          <Paragraph>
            Die Bewertung der Akteure basiert auf Informationen und Zitaten aus
            den Geschäftsberichten, von den Unternehmenswebsites und
            Rückmeldungen von Mieter:innen. Eine Bewertung anhand eines
            einheitlichen Schemas ist mit den verfügbaren Informationen nicht
            möglich. Deswegen handelt es sich hierbei nicht um objektive
            „Noten“, sondern um rein illustrative Werturteile. Für viele
            Eigentümer:innen und die meisten anderen Städte - außer Berlin -
            liegen uns noch nicht genug Rückmeldungen von Mieter:innen vor um
            daraus eine Einschätzung zu formulieren.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            Adressen und Objektgesellschaften (Vermietersuche)
          </Heading>

          <Paragraph>
            Für die Zuordnung einer Adresse zu einem Eigentümer nutzen wir
            folgende Informationen (sortiert nach der Qualität):
          </Paragraph>

          <ul>
            <li>
              <Paragraph>
                Grundbucheintrag/Mietvertrag + Recherche im Unternehmensregister
              </Paragraph>
            </li>

            <li>
              <Paragraph>
                Unternehmensunterlagen (z.B. Jahresabschluss inkl. Liste der
                Tochtergesellschaften, Website, Broschüre, Pressemitteilung,
                etc.)
              </Paragraph>
            </li>

            <li>
              <Paragraph>
                Transaktionsmitteilungen (IZ-Research), Presseberichten und/oder
                Mietangeboten (Information von MieterInnen, Internetportale)
              </Paragraph>
            </li>
          </ul>

          <Paragraph>
            Diese Informationen können unvollständig (z.B. bei komplexen
            Eigentümerstrukturen) oder veraltet (z.B. bei Verkauf oder Merger)
            sein. Das als verbunden identifizierte Unternehmen ist nicht immer
            der rechtliche Eigentümer, sondern es kann sich auch z.B. den
            Projektentwickler, Immobilienmanager, Verwalter, oder Makler
            handeln. Zwar haben wir anhand der Unternehmensdarstellungen
            versucht Dienstleister und Eigentümer zu unterscheiden, aber die
            Trennung ist nicht immer eindeutig und viele Unternehmen sind
            gleichzeitig Eigentümer und Dienstleister.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            Kein Ergebnis oder „Privat“
          </Heading>

          <Paragraph>
            In vielen Fällen wird die Suche ohne Ergebnis bleiben. Das kann
            verschiedene Gründe haben:
          </Paragraph>

          <ul>
            <li>
              <Paragraph>
                Zur eingegebenen Adresse oder Tochtergesellschaft liegen uns
                keine Daten vor
              </Paragraph>
            </li>

            <li>
              <Paragraph>
                Zur eingegebenen Adresse liegt uns zwar ein (oder mehrere)
                Datensatz vor, aber wir haben das verbundene Unternehmen als
                Dienstleister klassifiziert oder noch nicht analysiert
              </Paragraph>
            </li>
          </ul>

          <Paragraph>
            In vielen Fällen wird das Ergebnis „Privat“ sein. D.h. wir haben die
            Information erhalten, dass es sich um einen privaten Vermieter
            handelt und den Namen bekommen bzw. nicht erfasst oder wir haben ein
            Unternehmen in dessen Unternehmensname möglicherweise der
            Gesellschafter erkennbar war anonymisiert.
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default MethodologyPage;
