import React from 'react';
import App from './app';
import Presentation from './presentation';
import NotFound from './notFound';
import {Route} from 'react-router';

import * as IgPages from './igPages'
const {
    IgApp,
    ParkList,
    ParkPage,
    AuthResult
  } = IgPages;


class PresentationContainer{
  render(){
    return <div>{this.props.children}</div>
  }
}

class Success{
  render(){
    return <div>success</div>;
  }
}

class Fail{
  render(){
    return <div>fail</div>;
  }
}

export default (
  <Route component={PresentationContainer}>
    <Route path="/" component={Presentation} />
    <Route path="/slide/:currentSlide" component={Presentation} onEnter = {(nextState, transition) => {
      const currentSlide = parseInt(nextState.params.currentSlide);
      const paramOk = (currentSlide && currentSlide < 200) || currentSlide===0;
      if(!paramOk){
        transition.to('/notfound', null ,{badPath:nextState.location.pathname,errorMsg:'slide does not exist'});
      }
    }}/>
    <Route path="/igapp" component={IgApp}>
      <Route path="parks" component={ParkList} />
      <Route path="park/:alias" component={ParkPage} />
      <Route path="authResult" component={AuthResult} />
    </Route>
    <Route path="*" name="notfound" component={NotFound}/>
  </Route>
);