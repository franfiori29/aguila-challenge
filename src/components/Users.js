import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
const { REACT_APP_API } = process.env;

function Users() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${REACT_APP_API}/users`)
			.then((res) => res.json())
			.then((users) => {
				setUsers(
					users.message.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
				);
				setLoading(false);
			});
	}, []);

	if (loading) return <Spinner />;

	return (
		<div className='users'>
			<table>
				<thead>
					<tr>
						<th>Nombre completo</th>
						<th>Teléfono</th>
						<th>Email</th>
						<th>Estado</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`}</td>
							<td>{user.phone}</td>
							<td>{user.email.toUpperCase()}</td>
							<td>{user.status ? 'Activo' : 'No activo'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
