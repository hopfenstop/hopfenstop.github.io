import * as React from 'react'
import Layout from '../components/layout'
import { styles } from '../styles'

const DataProtection = () => {
  return (
    <Layout pageTitle="Datenschutz">
        <div style={styles.contentWrapper}>
            <p>
                Wir nehmen den Schutz Deiner persönlichen Daten sehr ernst und wollen Dich mit dieser
                Datenschutzerklärung über Art, Umfang und Zweck unserer Verarbeitung Deiner Daten durch die
                Nutzung unserer Webseite in verständlicher Form unterrichten.<br />
                Im Allgemeinen verarbeiten wir Deine Daten nur zweckgebunden und auf das für die Zwecke der
                Verarbeitung notwendige Maß beschränkt, in rechtmäßiger Weise, nach Treu und Glauben und in
                einer für Dich nachvollziehbaren Weise. Außerdem ist unser Bestreben, ausschließlich sachlich
                richtige Daten zu verarbeiten. Bitte teile uns daher umgehend mit, falls sich Veränderungen
                bzgl. der Daten ergeben, die Du uns zur Verfügung gestellt hast.<br />
                Grundsätzlich verarbeiten wir sämtliche Daten nur so lange, wie es für die Zwecke, für die sie
                verarbeitet werden, erforderlich ist. Dabei gewährleisten wir eine angemessene Sicherheit der
                personenbezogenen Daten, einschließlich des Schutzes vor unbefugter oder unrechtmäßiger
                Verarbeitung und vor unbeabsichtigtem Verlust, unbeabsichtigter Zerstörung oder
                unbeabsichtigter Schädigung durch geeignete technische und organisatorische Maßnahmen.
            </p>
            <p>
                <b>Verantwortlich für die Verarbeitung Deiner Daten in der HopfenStop App ist:</b><br />
                <br />
                Blam, Sebastian; Kroth, Kai und Rohrer, Tobias<br />
                Kaufunger Str. 7<br />
                60486 Frankfurt am Main<br />
                Hessen<br />
                Deutschland<br /><br />

                Du erreichst uns unter dieser Adresse postalisch oder per E-Mail unter datenschutz@hofenstop.de<br />
                Weitere Kontaktdaten findest Du im Impressum unserer Webseite.
            </p>
            <p>
                Du hast im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf in der Regel
                unentgeltliche Auskunft über bestimmte Einzelheiten zu Deinen durch uns verarbeiteten
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                Datenverarbeitung und unter Umständen ein Recht auf Berichtigung, Sperrung oder Löschung
                dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst Du dich jederzeit
                an uns wenden.<br />
                <br />
                Bei Beanstadungen hast Du ferner ein Beschwerderecht zum Hessischen Beauftragten für
                Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.
            </p>
            <p>
                <b>Server-Log-Files</b><br />
                Wir verarbeiten automatisch verschiedene Nutzerinformationen (Browsertyp, Browserversion,
                verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der
                Serveranfrage) in sogenannten Server-Log-Files, die Dein Browser automatisch an uns
                übermittelt. Diese Daten sind nicht personalisiert und lassen unmittelbar keinen Rückschluss auf
                Dich zu. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
                vorgenommen. Wir behalten uns lediglich vor, diese Daten nachträglich zu prüfen, wenn uns
                konkrete Anhaltspunkte für eine rechtswidrige Nutzung unserer Webseite bekannt werden.<br />
            </p>
            <p>
                <b>Google Web Fonts</b><br />
                Wir nutzen zur einheitlichen Darstellung von Schriftarten sogenannte Google Web Fonts, die von
                der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“),
                bereitgestellt werden. Beim Aufruf unserer Webseite lädt Dein Browser die benötigten Web Fonts
                in Deinen Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Wenn Dein Browser
                Web Fonts nicht unterstützt, wird eine Standardschrift von Deinem Computer genutzt. Weitere
                Informationen zu Google Web Fonts findest Du unter <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und
                in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.
                Wir können für die Datenverarbeitung von Google keine Verantwortung übernehmen und haben abgesehen
                von den Informationen auf den vorgenannten Webseiten von Google keine Informationen über
                Googles Datenverarbeitungsaktivitäten.<br />
            </p>
        </div>
    </Layout>
  )
}

export const Head = () => <title>Datenschutz</title>

export default DataProtection