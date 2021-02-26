import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { AppProvider } from './context';
import Todos from './components/Todos';
import Users from './components/Users';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route>
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
					</Route>
				</Switch>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
