import React from 'react';
import {connect} from 'react-redux';
import NeedsLogin from './needsLogin';
import * as igActions from '../../actions/igActions';

class IgFollowButton{
	handleFollowClick(){
		const {isFollowing, dispatch, parkId} = this.props;
		const {followPark, unFollowPark} = igActions;
		if (isFollowing) {
			dispatch(unFollowPark(parkId));
		} else {
			dispatch(followPark(parkId));
		}
	}
	render(){
		const {isFollowing, size} = this.props;
		const buttonText = isFollowing ? 'FOLLOWING' : 'FOLLOW';
		const buttonClass = `btn-default ${isFollowing ? 'active' : ''} btn-${size}`
		return (<NeedsLogin>
			<button onClick={::this.handleFollowClick} className={buttonClass}>{buttonText}</button>
		</NeedsLogin>);
	}
}

export default connect()(IgFollowButton);