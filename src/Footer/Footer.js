import React from 'react';
import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
			<div className={css.container}>
				<p className={css.text}>By Vyacheslav S. 2022</p>
			</div>
    </footer>
  );
}

export default Footer;
