import React from 'react';
import './normalize.css';
import './app.scss';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import * as reducers from '../reducers';
import {Router} from 'react-router';

const reducer = combineReducers(reducers);
//const store = createStore(reducer,[]);
const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);
const store = createStoreWithMiddleware(reducer,{});

export default class App{
  render(){
    return (<Provider store={store}>
      {()=><Router {...this.props.initialState} history={this.props.history} children={this.props.routes}/>}
    </Provider>);
  }
}
