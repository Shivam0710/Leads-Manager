import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLeads, deleteLead } from '../../actions/leads';
import PropTypes from 'prop-types';

class Leads extends Component {

	static propTypes = {
		leads: PropTypes.array.isRequired
	}

	componentDidMount() {
		this.props.getLeads();
	}

	render() {

		return (
			<Fragment>
				<h2> Leads </h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th> id </th>
							<th> name </th>
							<th> email  </th>
							<th> message </th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ this.props.leads.map(lead => (
							<tr key={lead.id}>
								<td> {lead.id} </td>
								<td> {lead.name} </td>
								<td> {lead.email} </td>
								<td> {lead.message} </td>
								<td> <button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm"> DELETE </button> </td>
							</tr>
						)) }
					</tbody>
				</table>
			</Fragment>
		)
	}
}

export default connect((state) => ({ leads: state.leads.leads }), { getLeads, deleteLead })(Leads)