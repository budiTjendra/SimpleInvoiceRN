import * as actions from '../../Actions'
import produce from 'immer';

const initialState = {
	accessToken: {}
}

const authenticationReducer = produce((draft, { type, payload } = {}) => {
	switch(type){
		case actions.UPDATE_ACCESS_TOKEN:
			return;
		case actions.SET_ACCESS_TOKEN:
			draft.accessToken = payload.token
			return;
		default:
			return draft;
	}
}, initialState);



export default authenticationReducer
