import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
          <AppBar position="static" sx={{ bgcolor: "#e0ab16", marginBottom: 1 }}>
              <Toolbar disableGutters sx={{ marginLeft: 3 }}>
                  <Typography textAlign="center" sx={{ fontSize: 24, fontWeight: 600 }}>
                      {pageTitle}
                  </Typography>
              </Toolbar>
          </AppBar>
        {children}
        <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/imprint" className={navLinkText}>
              Imprint
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/data_protection" className={navLinkText}>
              Data Protection
            </Link>
          </li>
        </ul>
        </nav>
    </div>
  )
}

export default Layout