import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultStates = fromJS ({
	title:'',
	content: ''
})

const changeDetail = (state, action) => {
	return state.merge({
				title: action.title,
				content: action.content
				});
}


export default (state = defaultStates, action) => {
	switch(action.type) {
		case constants.CHANGE_DETAIL:
			return changeDetail(state, action);
		default:
			return state;
	}
}