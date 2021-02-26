import React from 'react';
import { useAppContext } from '../context';
import { LoupeIcon, NotificationIcon } from '../icons';

function Navbar() {
	const { user } = useAppContext();
	return (
		<nav>
			<div className='navTitle'>Inicio</div>
			<div className='navOptions'>
				<LoupeIcon />
				<NotificationIcon />
				<div className='divider'></div>
				<div className='profileName'>{`${user?.firstName} ${user?.lastName}`}</div>
				<img src='logo.png' alt='profile picture' className='logo' />
			</div>
		</nav>
	);
}

export default Navbar;
