import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/users/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />

						<div className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/'
									component={() => (
										<React.Fragment>
											<Search />
											<Users />
										</React.Fragment>
									)}
								/>
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
