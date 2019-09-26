import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header';
import Dashboard from './leads/Dashboard';

import store from '../store';
import { Provider } from 'react-redux';

import Alert from './layouts/Alert'
class App extends Component {

	render() {

		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<Alert />
					<div className="container">
						<Dashboard />
					</div>
				</Fragment>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))