import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HouseIcon, TasksIcon, UsersIcon } from '../icons';

function Sidebar() {
	const { pathname } = useLocation();
	return (
		<aside>
			<div className='asideHeader'>
				<img src='/logo.png' alt='logo' className='logo' />
				<span>Mi Águila</span>
			</div>
			<div className={`asideOption ${pathname === '/' ? 'activeOption' : ''}`}>
				<HouseIcon fill={pathname === '/'} />
				<Link to='/'>Inicio</Link>
			</div>
			<div
				className={`asideOption ${
					pathname === '/usuarios' ? 'activeOption' : ''
				}`}
			>
				<TasksIcon fill={pathname === '/usuarios'} />
				<Link to='/usuarios'>Usuarios</Link>
			</div>
			<div
				className={`asideOption ${
					pathname === '/tareas' ? 'activeOption' : ''
				}`}
			>
				<UsersIcon fill={pathname === '/tareas'} />
				<Link to='/tareas'>Tareas</Link>
			</div>
		</aside>
	);
}

export default Sidebar;
