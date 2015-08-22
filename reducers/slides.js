import React from 'react';
import initialState from './slideData'

export default function slides(state=initialState,action){
  return initialState;  //pass a reference ONLY for this time, this is an anti-pattern
}
