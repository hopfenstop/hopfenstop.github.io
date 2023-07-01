import * as React from 'react'
import Layout from '../components/layout'
import { styles } from '../styles'

const Imprint = () => {
  return (
    <Layout pageTitle="Impressum">
        <div style={styles.contentWrapper}>
          <p><b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</b></p>
          <p>
              Blam, Sebastian; Kroth, Kai und Rohrer, Tobias<br />
              Kaufunger Str. 7<br />
              60486 Frankfurt am Main<br />
              Hessen<br />
              Deutschland<br />
              <br />
              E-Mail: info@hopfenstop.de<br />
              Telefon: +49(0)1601845214<br />
              Internetadresse: hopfenstop.de<br />
          </p>
        </div>
    </Layout>
  )
}

export const Head = () => <title>Impressum</title>

export default Imprint