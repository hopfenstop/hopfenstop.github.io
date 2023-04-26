import * as React from 'react'
import Layout from '../components/layout'
import kioskData from "../data/kiosk_data.json"
import KioskHeaderMap from '../components/kiosk_detail_view/kiosk_map_header'
import KioskTimes from '../components/kiosk_detail_view/kiosk_times'
import { styles } from '../styles'

const KioskDetailView = ({location}) => {
    const params = new URLSearchParams(location.search);
    var kioskId = params.get('kiosk_id')
    const kiosk = kioskData.find(item => item.kioskId === kioskId);
    console.log(kiosk)

  if (kiosk){
    return (
      <Layout pageTitle={kiosk.name}>
          <KioskHeaderMap lat={kiosk.address.geolat} long={kiosk.address.geolng}/>
          <div style={styles.kioskDetailView.sectionHeader}>Beschreibung</div>
          <div style={styles.kioskDetailView.sectionText}>{kiosk.description}</div>
          {kiosk.kioskTags.find(item => item.tag === 'WC') ?
              <div style={styles.kioskDetailView.toilet}>Mit WC</div> :
              <div style={styles.kioskDetailView.noToilet}>Ohne WC</div>}
          <div style={styles.kioskDetailView.sectionHeader}>Öffnungszeiten</div>
          {kiosk.kioskTimes.length === 0 ?
              <div style={styles.kioskDetailView.sectionText}>Keine Öffnungszeiten vorhanden</div> :
              <KioskTimes kioskTimes={kiosk.kioskTimes}/>
          }
          <div style={styles.kioskDetailView.sectionHeader}>Adresse</div>

          <div style={styles.kioskDetailView.sectionText}>{kiosk.address.street} {kiosk.address.number}, {kiosk.address.city}</div>


      </Layout>
    )
  }
}

export const Head = () => <title>Kiosk Details</title>

export default KioskDetailView