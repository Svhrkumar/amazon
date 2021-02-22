import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
	return (
		<Router>
			<div className='app'>
				<Navbar />
				<Switch>
					<Route path='/checkout'>
						<Checkout />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
