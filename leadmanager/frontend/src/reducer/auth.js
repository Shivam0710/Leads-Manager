import { 
	USER_LOADING, AUTH_ERROR, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE
 } from '../actions/types'

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	isLoading: false,
	user: null
}

export default function(state=initialState, action) {
	switch(action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			}
		case USER_LOADED:
			return {
				...state,
				isLoading: false,
				user: action.payload,
				isAuthenticated: true
			}
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isLoading: false,
				isAuthenticated: true,
			}
		case AUTH_ERROR:
		case LOGIN_FAILURE:
		case LOGOUT_SUCCESS:
		case REGISTER_FAILURE:
			return {
				...state,
				isAuthenticated: false,
				isLoading: false,
				user: null,
				token: null
			}
		default:
			return state
	}
}