import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import { AppProvider } from './context';
import Todos from './components/Todos';
import Users from './components/Users';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
const { REACT_APP_API } = process.env;

function App() {
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

	return (
		<AppProvider>
			<BrowserRouter>
				<Sidebar />
				<Navbar />
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/usuarios'>
					<Users />
				</Route>
				<Route exact path='/tareas'>
					<Todos />
				</Route>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
