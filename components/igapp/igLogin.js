import React from 'react';
import {connect} from 'react-redux';
import * as igActions from '../../actions/igActions';
import {Link} from 'react-router';
import AvatarImg from './avatarImg';

function selector(state){
	return {
		apiKey:state.apiKey,
		user:state.user
	}
}

class IgLogin{
	componentWillReceiveProps(nextProps){
		const {apiKey} = this.props;
		//console.log('WILL RECEIVE PROPS',nextProps,apiKey);
		if( nextProps.apiKey !== apiKey ){			//the apiKey is being set by the /igapp/authResult path
			this.fetchUserInfo();
		}
	}
	componentWillMount(){
		const {apiKey} = this.props;
		if( apiKey ){
			this.fetchUserInfo();
		}
	}
	fetchUserInfo(){
		const { fetchUserInfo } = igActions;
		this.props.dispatch(fetchUserInfo());
	}
	handleLoginClick(e){
		e.preventDefault();
		const { promptAuth } = igActions;
		this.props.dispatch(promptAuth());
	}
	render(){
		const {apiKey, user, user:{username,isFetching,profile_picture}} = this.props;
		if (username){
			return (<Link to="/igapp/profile">
				<div style={{display:'flex',flexFlow:'row nowrap',alignItems:'center',justifyContent:'flex-end'}}>
					<AvatarImg src={profile_picture} size="30" />
					<span style={{marginLeft:10}}>{username}</span>
				</div>
			</Link>);
		} else if (isFetching){
			return <div>loading...</div>;
		} else {
			return <div><a href="" onClick={::this.handleLoginClick}>login</a></div>;
		}
	}
}

export default connect(selector)(IgLogin);