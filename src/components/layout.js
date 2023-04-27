import * as React from 'react';

import { Link } from 'gatsby';
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css';
import NavBar from './app_bar';

const Layout = ({ pageTitle, children }) => {
  return (
    <div style={{ height: '100vh' }} className={container}>
      <NavBar pageTitle={pageTitle} />
      {children}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/imprint' className={navLinkText}>
              Imprint
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/data_protection' className={navLinkText}>
              Data Protection
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
