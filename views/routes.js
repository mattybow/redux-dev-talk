import React from 'react';
import App from './app';
import Presentation from './presentation';
import NotFound from './notFound';
import {Route} from 'react-router';
import {IgFollowList, IgLikedList} from '../components/igComps';

import * as IgPages from './igPages'
const {
    IgApp,
    ParkList,
    ParkPage,
    AuthResult,
    Profile,
    Feed,
    PrivacyPolicy
  } = IgPages;


class PresentationContainer{
  render(){
    return <div style={{minHeight:'100%'}}>{this.props.children}</div>
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
    <Route component={IgApp}>
      <Route path="igapp" component={Feed} />
    </Route>
    <Route path="/igapp" component={IgApp}>
      <Route path="/" component={Profile} />
      <Route path="pp" component={PrivacyPolicy}/>
      <Route path="parks" component={ParkList} />
      <Route path="park/:alias" component={ParkPage} />
      <Route path="authResult" component={AuthResult} />
      <Route path="profile" component={Profile} >
        <Route path="following" component={IgFollowList} />
        <Route path="liked" component={IgLikedList} />
      </Route>
    </Route>
    <Route path="*" name="notfound" component={NotFound}/>
  </Route>
);
