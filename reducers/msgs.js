import {ADD_MSG} from '../constants/msgActionTypes';

const initialState = [];

export default function msgs(state=initialState,action){
	switch(action.type){
		case ADD_MSG:
			console.log('add msg reducer');
			return [{
				msg:action.msg
			}, ...state];
		default:
			return state;
	}
}