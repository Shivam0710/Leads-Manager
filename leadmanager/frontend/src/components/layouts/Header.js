import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth'

class Header extends Component {

	render() {

		const { isAuthenticated, user } = this.props.auth

		const guestLinks = (
			<ul className="navbar-nav ml-auto mt-2">
				<li>
					<Link to="/login" className="nav-link"> Login </Link>
				</li>
				<li>
					<Link to="/register" className="nav-link"> Register </Link>
				</li>
			</ul>
		)
	
		const authLinks = (
			<ul className="navbar-nav ml-auto mt-2">
				<span className="navbar-text mr-3">
					<strong> { user ? `Hey ${user.username}` : '' } </strong>
				</span>
				<li>
					<button onClick={ this.props.logout } className="nav-link btn btn-info btn-sm text-light"> Logout </button>
				</li>
			</ul>
		)

		return (
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="#">Leads Manager</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						{isAuthenticated ? authLinks : guestLinks}
					</div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth	
})

export default connect(mapStateToProps, { logout })(Header)