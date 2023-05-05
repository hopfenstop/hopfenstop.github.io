import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import Directions from '@mui/icons-material/Directions';
import Layout from '../components/layout'
import kioskData from "../data/kiosk_data.json"
import KioskHeaderMap from '../components/kiosk_detail_view/kiosk_map_header'
import KioskTimes from '../components/kiosk_detail_view/kiosk_times'
import { styles } from '../styles'
import { navigate } from 'gatsby';

const KioskDetailView = ({location}) => {
    const params = new URLSearchParams(location.search);
    var kioskId = params.get('kiosk_id')
    const kiosk = kioskData.find(item => item.kioskId === kioskId);

    let coordinates;
    if (kiosk && kiosk.address) {
      coordinates = kiosk.address.geolat + ',' + kiosk.address.geolng;
    }
    const navigationLink = 'https://www.google.com/maps/dir/?api=1&travelmode=walking&destination=' + coordinates;

    const handleNavigate = () => {
      navigate(navigationLink);
    };

  if (kiosk){
    return (
      <Layout pageTitle="Kiosk Details">
          <KioskHeaderMap lat={kiosk.address.geolat} long={kiosk.address.geolng}/>
          <div style={styles.contentWrapper}>
            <div style={styles.kioskDetailView.kioskName}>{kiosk.name}</div>
            <div style={styles.kioskDetailView.sectionHeader}>Beschreibung
              <span style={styles.kioskDetailView.sectionHeaderRight}>
                {kiosk.kioskTags.find(item => item.tag === 'WC') ?
                <div style={styles.kioskDetailView.toilet}>Mit WC</div> :
                <div style={styles.kioskDetailView.noToilet}>Kein WC</div>}
              </span>
            </div>
            <div style={styles.kioskDetailView.sectionText}>{kiosk.description}</div>
          </div>
          <hr style={styles.divider}></hr>
          <div style={styles.contentWrapper}>
            <div style={styles.kioskDetailView.sectionHeader}>Öffnungszeiten</div>
            {kiosk.kioskTimes.length === 0 ?
                <div style={styles.kioskDetailView.sectionText}>Keine Öffnungszeiten vorhanden</div> :
                <KioskTimes kioskTimes={kiosk.kioskTimes}/>
            }
          </div>
          <hr style={styles.divider}></hr>
          <div style={styles.contentWrapper}>
            <div style={styles.kioskDetailView.sectionHeader}>Adresse</div>
            <div style={styles.kioskDetailView.sectionText}>{kiosk.address.street} {kiosk.address.number}, {kiosk.address.city}</div>
            <IconButton
              color='primary'
              onClick={handleNavigate}
            >
              <Directions />
            </IconButton>
            <span style={styles.callToAction}>Route zum Kiosk</span>
          </div>

      </Layout>
    )
  }
}

export const Head = () => <title>Kiosk Details</title>

export default KioskDetailView