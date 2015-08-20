import React from 'react';

const initialState = [{
  contentKey:'reduxTitle',
  format:'text'
},
{
  contentKey:'simplicity',
  format:'text'
},
{
  contentKey:'reduxIntro',
  format:'md'
},
{
  contentKey:'reactS1',
  format:'md'
},
{
  contentKey:'reactOverview',
  format:'jsx'
},
{
  contentKey:'reactS2',
  format:'md'
},
{
  contentKey:'reactReferences',
  format:'md'
},
{
  contentKey:'fluxOverview',
  format:'jsx'
},
{
  contentKey:'reduxConcepts',
  format:'md'
},
{
  contentKey:'reducers',
  format:'text'
},
{
  contentKey:'igAppDemoSlide',
  format:'jsx'
},
{
  contentKey:'concurrentActions',
  format:'jsx'
},
{
  contentKey:'middleware',
  format:'text'
},
{
  contentKey:'ssr',
  format:'text'
},
{
  contentKey:'msgInput',
  format:'jsx'
},
{
  contentKey:'reduxReferences',
  format:'md'
}
];

export default function slides(state=initialState,action){
  return state;
}

//www.linkedin.com/in/mattybow