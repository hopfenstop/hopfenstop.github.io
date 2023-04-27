import * as React from 'react';

import { container } from './layout.module.css';
import NavBar from './app_bar';

const Layout = ({ pageTitle, children }) => {
  return (
    <div style={{ height: '100vh' }} className={container}>
      <NavBar pageTitle={pageTitle} />
      {children}
    </div>
  );
};

export default Layout;
