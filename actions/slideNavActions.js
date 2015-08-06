import * as types from '../constants/actionTypes';

export function nextSlide(){
  return (dispatch,getState)=>{
    const {slides} = getState();
    dispatch({
      type: types.NEXT_SLIDE,
      max: slides.length
    });
  };
}