import React from 'react';
// - - -
import css from './content.module.css';

export default ({ children }) => <article className={css.content}>{children}</article>;
