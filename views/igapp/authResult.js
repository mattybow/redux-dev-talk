import React, {Component, PropTypes} from 'react';
import * as igActions from '../../actions/igActions';

export default class AuthResult extends Component{
  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  
  componentWillMount(){
    const {router, store} = this.context;
    const {setApiKey} = igActions;
    const {hash} = document.location;
    if(hash){
      const token = hash.replace(/#access_token=/,'');
      localStorage.setItem('igParksApiKey',token);
      store.dispatch(setApiKey(token));
    }
    const replacementRoute = localStorage.getItem('igAppRedirectPathAfterOath');
    localStorage.setItem('igAppRedirectPathAfterOath','');
    router.replaceWith(replacementRoute);
  }
  render(){
    return <div></div>;
  }
}