import React from 'react';
import { useAppContext } from '../context';

function Home() {
	const { loading } = useAppContext();

	return (
		<div className='home'>
			<h1>Bienvenido Franco</h1>
			<img src='/illustration.png' alt='illustration' />
		</div>
	);
}

export default Home;
