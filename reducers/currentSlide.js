import {NEXT_SLIDE} from '../constants/actionTypes';

export default function currentSlide(state=0,action){
	switch(action.type){
		case NEXT_SLIDE:
		console.log('NEXT_SLIDE ACTION');
			return Math.min(action.max, state++);
		default:
			return state;
	}
}