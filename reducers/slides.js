import React from 'react';

const initialState = [{
  contentKey:'reduxTitle',
  format:'text'
},
{
  contentKey:'s2',
  format:'text'
},
{
  contentKey:'reduxIntro',
  format:'md'
},
{
  contentKey:'markdownSlide',
  format:'md'
},
{
  contentKey:'s2',
  format:'text'
},
{
  contentKey:'reduxIntro',
  format:'md'
},
{
  contentKey:'msgInput',   //DO NOT do this in production, class in not serializable for server rendering
  format:'jsx'
},
{
  contentKey:'testComp',   //DO NOT do this in production, class in not serializable for server rendering
  format:'jsx'
}
];

export default function slides(state=initialState,action){
  return state;
}