import React from 'react';
import 'sanitize.css';
// - - -
import 'templates/fonts.css';
import 'templates/global.css';
// - - -
import css from './layout.module.css';

const Layout = ({ children, currentSlug = '/' }) => (
  <div className={css.layout}>{children}</div>
);

export default Layout;
