import React from 'react';
import {connect} from 'react-redux';
import {displayLogout, undisplayLogout} from '../../actions/igActions';
import AvatarImg from './avatarImg';
import {Link} from 'react-router';

function selectUserInfo(state){
	return {
		user:state.user,
		likes: state.likes.length,
		follows: state.follows.length
	};
}

class StatBlock{
	render(){
		return <div className='stat-block'>
			<div style={{fontSize:'1.2em', fontWeight:400}}>{this.props.statName}</div>
			<div style={{fontSize:'2em'}}><Link to={this.props.href}>{this.props.count}</Link></div>
		</div>
	}
}

class Profile{
	componentWillMount(){
		this.props.dispatch(displayLogout());
	}
	componentWillUnmount(){
		this.props.dispatch(undisplayLogout());
	}
	render(){
		const {likes, follows, user:{username, profile_picture, full_name}} = this.props;
		const igUrl = `https://instagram.com/${username}`;
		if(username){
			return <div id="profile-info">
				<AvatarImg src={profile_picture} size={100}/>
				<div className="user-info">
					<div className="user-full-name">{full_name}</div>
					<div><a href={igUrl}>{username}</a></div>
				</div>
				<div className="stat-blocks flex-child-expand flex-parent-row">
					<StatBlock href="/igapp/profile/following" statName="following" count={follows} />
					<StatBlock href="/igapp/profile/liked" statName="liked" count={likes} />
				</div>
			</div>;
		} else {
			return <div>No one is logged in</div>;
		}
	}
}

export default connect(selectUserInfo)(Profile)