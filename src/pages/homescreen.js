import * as React from 'react'
import Layout from '../components/layout'
import { styles } from '../styles'

const Homescreen = () => {
  return (
    <Layout pageTitle="Als App hinzufügen">
        <div style={styles.contentWrapper}>
          <p>
          Du kannst HopfenStop als App zu deinem Homescreen hinzufügen, dann fühlt sich die Seite wie eine App an.
          </p>
          <p>
          <b>iOS</b><br />
          Öffne diese Seite im Safari Browser, klicke auf das Teilen-Icon und wähle "Zum Home-Bildschirm".<br /><br />
          <b>Android</b><br />
          Tippe auf die 3 Punkte im Browser und wähle im Menü "Zum Startbildschirm hinzufügen".
          </p>
        </div>
    </Layout>
  )
}

export const Head = () => <title>Als App hinzufügen</title>

export default Homescreen