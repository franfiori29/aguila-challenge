import React, { useEffect } from 'react';
const { REACT_APP_API } = process.env;

function Users() {
	useEffect(() => {
		fetch(`${REACT_APP_API}/users`)
			.then((res) => res.json())
			.then((users) =>
				console.log(
					'users',
					users.message.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
				)
			);
	}, []);
	return <h1 className='users'>Users</h1>;
}

export default Users;
