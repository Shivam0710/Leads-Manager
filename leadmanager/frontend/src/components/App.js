import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header';
import Dashboard from './leads/Dashboard';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import store from '../store';
import { Provider } from 'react-redux';

import Alert from './layouts/Alert'
import Login from './accounts/Login'
import Register from './accounts/Register'
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth'
class App extends Component {

	componentDidMount() {
		store.dispatch(loadUser());
	}

	render() {

		return (
			<Provider store={store}>
				<Router>
					<Fragment>
						<Header />
						<Alert />
						<div className="container">
							<Switch>
								<PrivateRoute exact path="/" component={Dashboard} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/register" component={Register} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))