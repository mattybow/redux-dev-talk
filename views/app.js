import React from 'react';
import './normalize.css';
import './app.scss';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers';
import {Router} from 'react-router';

const reducer = combineReducers(reducers);
const store = createStore(reducer,[]);

export default class App{
  render(){
    return (<Provider store={store}>
      {()=><Router {...this.props.initialState} history={this.props.history} children={this.props.routes}/>}
    </Provider>);
  }
}
