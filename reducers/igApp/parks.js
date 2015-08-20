import parkList from './igNpsData';
import * as ACTION_TYPES from '../../constants/igActions';

const {
	RECEIVE_PARK_IMGS,
	RECEIVE_API_KEY,
	REQUEST_USER_INFO,
	RECEIVE_USER_INFO,
	FETCH_USER_FAIL,
	INVALIDATE_KEY,
	PROMPT_AUTH,
	DISMISS_PROMPT_AUTH
} = ACTION_TYPES;

export function parks(state=parkList,action){
	switch (action.type){
		default:
			return state;
	}
}

export function parkPhotos(state={},action){
	switch (action.type){
		case RECEIVE_PARK_IMGS:
			return {...state,...{[action.igId]:action.data}};
		default:
			return state;
	}
}

const key = localStorage.getItem('igParksApiKey') || null;
export function apiKey(state=key,action){
	switch (action.type){
		case RECEIVE_API_KEY:
			return action.key;
		case INVALIDATE_KEY:
			return null;
		default:
			return state;
	}
}

const userInitialState = {isFetching:false};
export function user(state=userInitialState,action){
	switch (action.type){
		case RECEIVE_USER_INFO:
			return {...state,...action.userInfo,...{isFetching:false}};
		case FETCH_USER_FAIL: 						//
			return {...state,...{isFetching:false,err:action.err}};
		case INVALIDATE_KEY:
			return userInitialState;
		default:
			return state;
	}
}

export function authPromptVisible(state=false,action){
	switch (action.type){
		case PROMPT_AUTH:
			return true;
		case DISMISS_PROMPT_AUTH:
			return false;
		default:
			return state;
	}
}