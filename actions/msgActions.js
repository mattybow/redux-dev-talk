import * as types from '../constants/msgActionTypes';

export function addMsg(msg){
	return {
		type: types.ADD_MSG,
		msg
	};
}