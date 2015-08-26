import React from 'react';
import {connect} from 'react-redux';
import IgFollowListItem from './igFollowListItem';

function selectFollows(state){
	const {parks,follows} = state;
	const followedParks = parks.filter(park => (follows.indexOf(park.id)>=0));
	return {followedParks:followedParks};
}

class IgFollowList{
	render(){
		return <div id="follow-list">
			{this.props.followedParks.map(
				park => (<IgFollowListItem 
							key={park.id} 
							data={park} 
							isFollowing={true}/>)
				)}
		</div>
	}
}

export default connect(selectFollows)(IgFollowList);