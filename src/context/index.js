import React, { useContext, useEffect, useState } from 'react';
const { REACT_APP_API } = process.env;

export const AppContext = React.createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [todos, setTodos] = useState([]);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const localTodos = localStorage.getItem('todos');
		if (localTodos) {
			setTodos(JSON.parse(localTodos));
		} else {
			localStorage.setItem('todos', JSON.stringify([]));
		}
		fetch(`http://localhost:4000/login`)
			.then((res) => res.json())
			.then((res) => {
				setUser(res);
				setLoading(false);
			});
	}, []);

	return (
		<AppContext.Provider
			value={{
				loading,
				setLoading,
				user,
				setUser,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
