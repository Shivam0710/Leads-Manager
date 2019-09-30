import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alert extends Component {
	state = {
		showAlert: false,
		errMsg: ''
	}

	alertStyle = {
		position: 'fixed',
		padding: '10px',
		color: '#fff',
		background: 'rgba(0,0,0,0.5)',
		top: '20px',
		left: '50%',
		transform: 'translateX(-50%)',
		zIndex: '2'
	}

	componentDidUpdate(prevProps) {
		const { errors, message } = this.props
		if(errors != prevProps.errors) {
			if(errors.msg.name) {
				alert("Name: "+errors.msg.name.join())
			}
			if(errors.msg.email) {
				alert("Email: "+errors.msg.email.join())
			}
			if(errors.msg.message) {
				alert("message: "+errors.msg.message.join())
			}
			if(errors.msg.non_field_errors) {
				alert(errors.msg.non_field_errors.join())
			}
			if(errors.msg.username) {
				alert(errors.msg.username.join())
			}
		}

		if(message != prevProps.message) {
			if(message.leadAdded) this.showAlert(message.leadAdded)
			if(message.leadDeleted) this.showAlert(message.leadDeleted)
			if(message.passwordNotMatch) this.showAlert(message.passwordNotMatch)
		}
	}

	showAlert = (message) => {
		this.setState({
			showAlert: true,
			errMsg: message
		})

		setTimeout(() => {
            this.setState({
                showAlert: false
            })
        }, 3000)
	}

	render() {
		return (
			<div>
				{ this.state.showAlert &&
					<div style={this.alertStyle}>
						{this.state.errMsg}
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	errors: state.errors,
	message: state.messages
})

export default connect(mapStateToProps)(Alert)