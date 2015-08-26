import React from 'react';
import {connect} from 'react-redux';
import * as igActions from '../../actions/igActions';

function selectAuthPrompt(state){
	//console.log(state.authPromptVisible);
	return {authPrompt:state.authPrompt};
}

class AuthPrompt{
	handleDismissClick(e){
		e.preventDefault();
		const {dismissAuth} = igActions;
		this.props.dispatch(dismissAuth());
	}
	render(){
		if(this.props.authPrompt.isVisible){
			localStorage.setItem('igAppRedirectPathAfterOath', document.location.pathname);			//so we can return user to where they originally navigated to after oath redirect
			const oauthPath = `https://instagram.com/oauth/authorize/?client_id=1ca62ea2e3dc4fc5a9305493e5105f85&redirect_uri=http://localhost:5000/igapp/authResult&response_type=token`;
			return (<div id="auth-prompt">
				<div style={{fontSize:'3em'}} className="ig-font">Ig parks </div>
				<div style={{fontSize:'1.5em', padding:'10px 0 30px',width:'50%'}}>requires Instagram Login</div>
				<a href={oauthPath}>
					<button className="btn-default btn-xl">authorize</button>
				</a>
				<div style={{marginTop:15}}><a href="" onClick={::this.handleDismissClick}>no thanks</a></div>
			</div>);
		}
		return <div></div>;
	}
}

export default connect(selectAuthPrompt)(AuthPrompt);