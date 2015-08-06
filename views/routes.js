import React from 'react';
import App from './app';
import Presentation from './presentation';
import NotFound from './notFound';
import {Route} from 'react-router';

class PresentationContainer{
  render(){
    return <div>{this.props.children}</div>
  }
}

export default (
  <Route component={PresentationContainer}>
    <Route path="/" component={Presentation} />
    <Route path="/slide/:currentSlide" component={Presentation} onEnter = {(nextState, transition) => {
      console.log(nextState.params.currentSlide);
      const currentSlide = parseInt(nextState.params.currentSlide);
      const paramOk = (currentSlide && currentSlide < 200) || currentSlide===0;
      if(!paramOk){
        transition.to('/notfound', null ,{badPath:nextState.location.pathname,errorMsg:'slide does not exist'});
      }
    }}/>
    <Route path="*" name="notfound" component={NotFound}/>
  </Route>
);