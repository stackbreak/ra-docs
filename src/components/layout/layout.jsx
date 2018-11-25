import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css';
// - - -
import 'templates/fonts.css';
import 'templates/global.css';
import { SideBar } from 'components/sidebar';
import { Content } from 'components/content';
// - - -
import css from './layout.module.css';
import icon48 from '../../../static/icon48.png';

export default ({ children, currentSlug = '/' }) => (
  <div className={css.layout}>
    <Helmet link={[{ rel: 'shortcut icon', type: 'image/png', href: `${icon48}` }]} />
    <SideBar currentSlug={currentSlug} />
    <div className={css.contentBox}>
      <Content>{children}</Content>
    </div>
  </div>
);
