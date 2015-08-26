import {INCREMENT_COUNTER} from '../constants/counterTypes';

export function counter(state=0,action){
	switch (action.type){
		case INCREMENT_COUNTER:
			return state+1;
		default:
			return state;
	}
}

function counterColor(state,action){
	switch (action.type){
		case INCREMENT_COUNTER:
			return state%2 ? 'red' : 'blue';
		default:
			return state;
	}
}

export function cr1(state={reducer1:0,reducer2:'blue'},action){
	const counter1 = counter(state.counter1,action);
	const color = counterColor(counter1,action);
	return { counter1, color }
}