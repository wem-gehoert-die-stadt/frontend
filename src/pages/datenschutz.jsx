import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import { useTitle } from 'hooked-head';
import React from 'react';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import constraint from '../styles/constraint';
import fluid from '../styles/fluid';

const PrivacyPage = () => {
  const intl = useIntl();

  useTitle(intl.formatMessage({ id: 'privacy.title' }));

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
            {intl.formatMessage({ id: 'privacy.title' })}
          </Heading>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            1) Präambel
          </Heading>

          <Paragraph>
            In den folgenden Absätzen zeigen wir auf, welche Daten wann und zu
            welchem Zweck und auf welcher Rechtsgrundlage verarbeitet werden.
            Dabei soll Ihnen erläutert werden, wie unsere angebotenen Dienste
            arbeiten und wie dabei der Schutz Ihrer personenbezogenen Daten
            gewährleistet wird.
          </Paragraph>

          <Paragraph>
            Alle Definitionen beziehen sich auf die Datenschutzgrundverordnung
            (DSGVO).
          </Paragraph>

          <Paragraph>
            Personenbezogene Daten sind gemäß Art. 4 Ziff. 1 DSGVO alle
            Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person beziehen. Als identifizierbar
            wird eine natürliche Person angesehen, die direkt oder indirekt
            identifiziert werden kann.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            2) Verantwortlicher
          </Heading>

          <Paragraph>
            Verantwortlicher im Sinne des Art. 4 Ziff. 7 DSGVO für die
            Verarbeitung personenbezogener Daten ist:
          </Paragraph>

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
            3) Ansprechpartner für Datenschutz
          </Heading>

          <Paragraph>
            Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten, sowie zu
            Ihren Rechten rund um den Datenschutz, wenden Sie sich bitte an
            unseren Datenschutzbeauftragten:
          </Paragraph>

          <Paragraph>
            kpp-group GmbH
            <br />
            Berliner Str. 112a
            <br />
            13189 Berlin
            <br />
            Telefon: 030 206 7372 0<br />
            E-Mail: datenschutz@rosalux.de
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
            4) Betroffenenrechte
          </Heading>

          <Paragraph>Sie haben grundsätzlich folgende Rechte:</Paragraph>

          <ul>
            <li>
              <Paragraph>Auskunftsrecht (Art. 15 DSGVO)</Paragraph>
            </li>

            <li>
              <Paragraph>Recht auf Berichtigung (Art. 16 DSGVO)</Paragraph>
            </li>

            <li>
              <Paragraph>Recht auf Löschung (Art. 17 DSGVO)</Paragraph>
            </li>

            <li>
              <Paragraph>
                Recht auf Einschränkung der Verarbeitung (Art. 18f. DSGVO)
              </Paragraph>
            </li>

            <li>
              <Paragraph>
                Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
              </Paragraph>
            </li>

            <li>
              <Paragraph>Widerspruchsrecht (Art. 21 DSGVO)</Paragraph>
            </li>
          </ul>

          <Paragraph>
            Bei Anfragen dieser Art, wenden Sie sich bitte an
            datenschutz@rosalux.de. Bitte beachten Sie, dass bei derartigen
            Anfragen sichergestellt werden muss, dass es sich tatsächlich um die
            betroffene Person handelt.
          </Paragraph>

          <Paragraph>
            Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen
            oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
            Datenschutzaufsichtsbehörde.
          </Paragraph>

          <Paragraph>
            Eine automatisierte Entscheidungsfindung findet auf unserer Webseite
            nicht statt.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            5) Datensicherheit
          </Heading>

          <Paragraph>
            Unsere Webseite und sonstigen Systeme werden, durch technische und
            organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff,
            Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen,
            gesichert. Trotz regelmäßiger Kontrollen ist ein vollständiger
            Schutz gegen alle Gefahren jedoch nicht möglich.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            6) Allgemeine Informationen zur Datenspeicherung
          </Heading>

          <Paragraph>
            Beim Besuch der Seite fallen normale Verkehrsdaten an, die für die
            Bereitstellung der Inhalte unerlässlich sind und von unserem Host
            für maximal 30 Tage gespeichert werden. Es wird jedoch keine
            Software zur Nutzungsanalyse eingesetzt.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            7) Nutzung der Suchmaske
          </Heading>

          <Paragraph>
            Die in die Suchmaske suchbare Daten stellen keine personenbezogenen
            Daten dar und es werden bei der Verwendung der Suchmaske außer der
            üblichen Verkehrsdaten keine nutzerbezogenen Daten erhoben. Die
            Suchabfragen werden ohne Nutzer- oder Verkehrsdaten zum
            Datenabgleich an unseren Datenbankanbieter gesendet und zur
            Sicherstellung der Funktionalität der Seite aufgezeichnet.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            8) Einsendung von Informationen via Email
          </Heading>

          <Paragraph>
            Nutzerinnen haben die Möglichkeit via Email Rückmeldung zu ihren
            Vermietern zu geben. Dabei werden auch personenbezogene Daten
            erfasst und erfragt, insbesondere die Email-Adresse und
            Informationen zur Wohnsituation. Mit dem Versand der Email stimmt
            die übermittelnde Person der Übermittlung und der Weiterverarbeitung
            dieser Daten zu. Die übermittelten Daten werden manuell überprüft
            und zunächst ohne personenbezogene Daten (sowohl der Vermieter als
            auch der Übermittelnden) gespeichert.
          </Paragraph>

          <Paragraph>
            Die Email-Adresse wird zur Beantwortung von Fragen, für Rückfragen
            bei Klärungsbedarf und zur Bereitstellung von weiterführenden
            Informationen zur Suchanfrage verwendet und danach gelöscht. Eine
            dauerhafte Speicherung und ggf. eine Weitergabe an Dritte erfolgt
            nur, wenn die Übermittelnden dies auf Nachfrage explizit wünschen
            und wird nur für die von der Zustimmung abgedeckten Zwecke - z.B.
            die Vernetzung mit anderen Mieterinnen oder für spätere Rückfragen -
            verwendet. Wir können jedoch nicht ausschließen, dass diese Daten
            beim Vorliegen von rechtswidrigem Verhalten eingesehen werden. Für
            abseits dieser Webseite gesendete Emails können wir keine sichere
            Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen
            Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu
            übermitteln.
          </Paragraph>

          <Paragraph>
            Sie können der Erhebung von personenbezogenen Daten widersprechen
            oder Ihre Einwilligung jederzeit widerrufen – eine formlose E-Mail
            reicht aus. Unsere Kontaktdaten finden Sie im Impressum.
          </Paragraph>

          <Heading
            level="2"
            as="3"
            css={css`
              margin-top: ${fluid(1, 2)};
              margin-bottom: ${fluid(0.5, 0.75)};
            `}
          >
            9) Änderung der Datenschutzerklärung
          </Heading>

          <Paragraph>
            Gesetzesänderungen genauso wie Aktualisierungen und Änderungen der
            Website und der damit verbundenen internen Prozesse können eine
            Anpassung dieser Datenschutzerklärung erforderlich machen.
          </Paragraph>

          <Paragraph>Stand: 6.11.2020</Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
