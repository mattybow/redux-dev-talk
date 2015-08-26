import * as ACTION_TYPES from '../constants/igActions';
import * as igApi from './igApi';

const {
	REQUEST_PARK_IMGS,
	RECEIVE_PARK_IMGS,
	REQUEST_PARK_IMGS_FAIL,
	RECEIVE_API_KEY,
	PROMPT_AUTH,
	DISMISS_PROMPT_AUTH,
	REQUEST_USER_INFO,
	RECEIVE_USER_INFO,
	REQUEST_USER_INFO_FAIL,
	INVALIDATE_KEY,
	FOLLOW_PARK,
	UNFOLLOW_PARK,
	SET_PARK_LIST_FILTER,
	DISPLAY_LOGOUT,
	UNDISPLAY_LOGOUT,
	ADD_LIKED_PHOTO,
  REMOVE_LIKED_PHOTO
} = ACTION_TYPES

//-------REQUEST IG PHOTOS----------//
export function fetchIfNeeded(parkId){
	return (dispatch,getState) =>{
		const state = getState();
		const { apiKey } = state;
		dispatch(requestPhotos());
		igApi.getParkPhotos(apiKey, parkId)
		.then(
			res => {dispatch(receivePhotos(parkId, res.body.data))},
			err => {dispatch(requestPhotosFail(err))}
		);
	}
}

function requestPhotos(){
	return {
		type:REQUEST_PARK_IMGS
	};
}

function receivePhotos(parkId,data){
	return {
		type:RECEIVE_PARK_IMGS,
		parkId,
		data
	}
}

function requestPhotosFail(){
	return {
		type:REQUEST_PARK_IMGS_FAIL
	}
}


export function setApiKey(key){
	return {
		type:RECEIVE_API_KEY,
		key
	}
}

//-------LOGIN LOGIC----------//
export function promptAuthIfNeeded(){
	return (dispatch,getState) =>{
		const {authPrompt:{hasShown}} = getState();
		if(!hasShown) {
			dispatch(promptAuth());
		}
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

//-------FOLLOW LOGIC----------//
export function followPark(parkId){
	return {
		type:FOLLOW_PARK,
		parkId
	}
}

export function unFollowPark(parkId){
	return {
		type:UNFOLLOW_PARK,
		parkId
	}
}

//-------PARK FILTER LOGIC----------//
export function setParkFilter(...[name,term]){
	return {
		type:SET_PARK_LIST_FILTER,
		name,
		term
	}
}

//-------LOGOUT---------------//
export function displayLogout(){
	return {
		type: DISPLAY_LOGOUT
	}
}
export function undisplayLogout(){
	return {
		type: UNDISPLAY_LOGOUT
	}
}
export function logout(){
	return {
		type: INVALIDATE_KEY
	}
}

//--------LIKE LOGIC-------------//


















































/*export function addLikedPhoto(photo){
	return {
		type: ADD_LIKED_PHOTO,
		photo 
	}
}
export function removeLikedPhoto(photo){
	return {
		type: REMOVE_LIKED_PHOTO,
		photo
	}
}*/