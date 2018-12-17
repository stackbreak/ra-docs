/* ========================================================================== */
/*                                HEADER BLOCK                                */
/* ========================================================================== */

import React from 'react';
import { Link } from 'gatsby';

import css from './header.module.css';

///

export default () => (
  <header className={css.container}>
    <Link to="/">
      <div className={css.logo}>Ra / Docs</div>
    </Link>
  </header>
);
