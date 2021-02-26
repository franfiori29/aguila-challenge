import React, { useContext, useEffect, useState } from 'react';

export const AppContext = React.createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const localTodos = localStorage.getItem('todos');
		if (localTodos) {
			setTodos(JSON.parse(localTodos));
		} else {
			localStorage.setItem('todos', JSON.stringify([]));
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				loading,
				setLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
