import * as React from 'react'
import Layout from '../components/layout'
import KioskMap from '../components/kiosk_map_overview'

const IndexPage = () => {
  return (
    <Layout pageTitle="HopfenStop PWA">
      <KioskMap/>
    </Layout>
  )
}

export const Head = () => <title>HopfenStop PWA</title>

export default IndexPage