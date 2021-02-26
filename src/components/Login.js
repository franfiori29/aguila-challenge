import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAppContext } from '../context';
import Spinner from './Spinner';
const { REACT_APP_API } = process.env;

function Login() {
	const { user, setUser, loading, setLoading } = useAppContext();
	const [errors, setErrors] = useState([]);
	const [inputUser, setInputUser] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setInputUser((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let passwordErrors = [];
		if (!/(?=.*[A-Z])/.test(inputUser.password))
			passwordErrors.push(
				'La contraseña debe tener al menos una letra mayúscula'
			);
		if (!/(?=.*[0-9])/.test(inputUser.password))
			passwordErrors.push('La contraseña debe tener al menos un número');
		if (!/(?=.{7,})/.test(inputUser.password))
			passwordErrors.push('La contraseña debe tener un mínimo de 7 caracteres');

		if (!passwordErrors.length) {
			setLoading(true);
			setErrors([]);
			fetch(`${REACT_APP_API}/login`, {
				method: 'POST',
			})
				.then((res) => res.json())
				.then((res) => setUser(res));
		} else {
			setErrors(passwordErrors);
		}
	};

	if (user) return <Redirect to='/' />;

	if (loading) return <Spinner />;

	return (
		<form className='loginForm' onSubmit={handleSubmit}>
			<h1>Bienvenido</h1>
			<label htmlFor='username'>Usuario</label>
			<input
				name='username'
				value={inputUser.username}
				onChange={handleChange}
				type='email'
				required
			></input>
			<label htmlFor='password'>Contraseña</label>
			<input
				name='password'
				value={inputUser.password}
				onChange={handleChange}
				type='password'
				required
			></input>
			{errors.length > 0 && (
				<ul>
					{errors.map((error, i) => (
						<li key={i}>*{error}</li>
					))}
				</ul>
			)}
			<button>Iniciar sesión</button>
		</form>
	);
}

export default Login;
