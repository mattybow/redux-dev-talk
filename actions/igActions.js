import * as ACTION_TYPES from '../constants/igActions';
import * as igApi from './igApi';

const {
	REQUEST_PARK_IMGS,
	RECEIVE_API_KEY,
	PROMPT_AUTH,
	DISMISS_PROMPT_AUTH,
	REQUEST_USER_INFO,
	RECEIVE_USER_INFO,
	REQUEST_USER_INFO_FAIL,
	INVALIDATE_KEY
} = ACTION_TYPES

export function fetchIfNeeded(igId){
	return {
		type:REQUEST_PARK_IMGS,
		igId
	}
}

export function setApiKey(key){
	return {
		type:RECEIVE_API_KEY,
		key
	}
}

export function promptAuth(){
	return {
		type:PROMPT_AUTH
	}
}

export function dismissAuth(){
	return {
		type:DISMISS_PROMPT_AUTH
	}
}

function invalidateKey(){
	return {
		type:INVALIDATE_KEY
	}
}

function requestUserInfo(){
	return {
		type:REQUEST_USER_INFO
	}
}

function receiveUserInfo(userInfo){
	return {
		type:RECEIVE_USER_INFO,
		userInfo
	}
}

function fetchUserInfoFail(err){
	return {
		type:REQUEST_USER_INFO_FAIL,
		err
	}
}

export function fetchUserInfo(){
	return (dispatch,getState) =>{
		const state = getState();
		const { apiKey } = state;
		if(apiKey){
			dispatch(requestUserInfo());
			igApi.getUserInfo(apiKey)
			.then(
				res=>{
					dispatch(receiveUserInfo(res.body.data));
				},
				err=>{
					if(err.meta && err.meta.error_type === "OAuthAccessTokenException"){  //key is no longer valid clear
						dispatch(invalidateKey());
					} else {
						dispatch(fetchUserInfoFail(err));
					}
				}
			);
		}
	}
}