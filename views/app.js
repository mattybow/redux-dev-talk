import React from 'react';
import './app.scss';
import MsgInput from '../components/msgInput';
import {createStore, combineReducers, bindActionCreators} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
console.log(reducer);
const store = createStore(reducer,[]);

export default class App{
  render(){
    return (<Provider store={store}>
      {()=><MsgInput />}
    </Provider>);
  }
}
