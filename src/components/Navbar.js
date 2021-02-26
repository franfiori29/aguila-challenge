import React from 'react';
import { LoupeIcon, NotificationIcon } from '../icons';

function Navbar() {
	return (
		<nav>
			<div className='navTitle'>Inicio</div>
			<div className='navOptions'>
				<LoupeIcon />
				<NotificationIcon />
				<div className='divider'></div>
				<div className='profileName'>Franco Fiori</div>
				<img src='logo.png' alt='profile picture' className='logo' />
			</div>
		</nav>
	);
}

export default Navbar;
