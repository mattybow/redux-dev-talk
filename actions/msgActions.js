import * as types from '../constants/actionTypes';

export function addMsg(msg){
	return {
		type: types.ADD_MSG,
		msg
	};
}