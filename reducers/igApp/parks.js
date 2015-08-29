import parkList from './igNpsData';
import * as ACTION_TYPES from '../../constants/igActions';

const {
  REQUEST_PARK_IMGS,
  RECEIVE_PARK_IMGS,
  RECEIVE_API_KEY,
  REQUEST_USER_INFO,
  RECEIVE_USER_INFO,
  FETCH_USER_FAIL,
  INVALIDATE_KEY,
  PROMPT_AUTH,
  DISMISS_PROMPT_AUTH,
  FOLLOW_PARK,
  UNFOLLOW_PARK,
  SET_PARK_LIST_FILTER,
  DISPLAY_LOGOUT,
  UNDISPLAY_LOGOUT,
  ADD_LIKED_PHOTO,
  REMOVE_LIKED_PHOTO
} = ACTION_TYPES;

export function parks(state=parkList,action){
  switch (action.type){
    default:
      return state;
  }
}

export function parkPhotos(state={},action){
  let newData = {};
  const {parkId,data,next_url} = action;
  switch (action.type){
    case REQUEST_PARK_IMGS:
      const parkData = state[parkId] || {photos:[],next_url:'',isReqeusting:true};
      newData = {...parkData, ...{isRequesting:true}};
      console.log('PARK_DATA', newData, parkId);
      return {...state, ...{[parkId]:newData}};
    case RECEIVE_PARK_IMGS:
      const newPhotos = [...state[parkId].photos, ...data];             //append new photos
      newData = { [parkId]:
                          {photos:newPhotos, next_url, ...{isRequesting:false} }         //overwrite next_url
                      };
      return {...state, ...newData};
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
    case FETCH_USER_FAIL:             //
      return {...state,...{isFetching:false,err:action.err}};
    case INVALIDATE_KEY:
      return userInitialState;
    default:
      return state;
  }
}

export function authPrompt(state={isVisible:false,hasShown:false},action){
  switch (action.type){
    case PROMPT_AUTH:
      return {isVisible:true,hasShown:true};
    case DISMISS_PROMPT_AUTH:
      return {...state,...{isVisible:false}};
    default:
      return state;
  }
}

export function follows(state=[],action){
  switch (action.type){
    case FOLLOW_PARK:
      return [...state,action.parkId];
    case UNFOLLOW_PARK:
      return state.filter(parkId => (parkId !== action.parkId));
    default:
      return state;
  }
}

export function parkListFilter(state={name:'all',term:''},action){
  switch (action.type){
    case SET_PARK_LIST_FILTER:
      const {name,term} = action;
      return {...state,...{name,term}};
    default:
      return state;
  }
}

export function displayLogout(state=false,action){
  switch (action.type){
    case DISPLAY_LOGOUT:
      return true;
    case UNDISPLAY_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function likes(state=[],action){
  switch (action.type){
    case ADD_LIKED_PHOTO:
      return [...state,action.photo];
    case REMOVE_LIKED_PHOTO:
      return state.filter(photo=>(photo.id !== action.photo.id));
    default:
      return state;
  }
}
