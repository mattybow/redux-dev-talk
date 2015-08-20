import {BUTTON_1_ACTION, BUTTON_2_ACTION} from '../constants/concurrentTypes';

const initialState = {
	button1text: 0,
	button2text: 0
}

export default function(state=initialState,action){
	let output;
	switch(action.type){
		case BUTTON_1_ACTION:
			console.log('BUTTON 1 reducer started');
			output = state.button1text;
			for(var i=0;i<1000000000;i++){
				output++;
			}
			console.log('BUTTON 1 reducer ended');
			return {...state,...{button1text:output}};
		case BUTTON_2_ACTION:
			console.log('BUTTON_2_ACTION');
			output = state.button2text + 10;
			return {...state,...{button2text:output}};
		default:
			return state;
	}
}