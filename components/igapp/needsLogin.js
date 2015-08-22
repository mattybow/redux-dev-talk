import React from 'react';
import {connect} from 'react-redux';
import * as igActions from '../../actions/igActions';

function selectLoginInfo(state){
	const {user, apiKey} = state;
	return {user, apiKey};
}

class NeedsLogin{
	componentDidMount(){
		if(!this.props.apiKey){
			const { promptAuth } = igActions;
			this.props.dispatch(promptAuth());
		}
	}
	render(){
		if(this.props.apiKey){
			return <div>{this.props.children}</div>;	//if user is logged in, display the content
		} else {
			return <div>{this.props.msg}</div>;
		}
	}
}

export default connect(selectLoginInfo)(NeedsLogin);
