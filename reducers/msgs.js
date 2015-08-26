import {ADD_MSG} from '../constants/msgActionTypes';

const initialState = [];

export default function msgs(state=initialState,action){
	switch(action.type){
		case ADD_MSG:
			return [ ...state, {
				msg:action.msg
			}];
		default:
			return state;
	}
}