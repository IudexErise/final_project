import React from 'react';
import css from './Header.module.css';

function Header() {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<h1 className={css.logo}>Stolen Bike Report</h1>
				<div className={css.login}>
					<input className={css.input} placeholder='login'></input>
					<input className={css.input} placeholder='password'></input>
					<button className={css.button}>Log in</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
