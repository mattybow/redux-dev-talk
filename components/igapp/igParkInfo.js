import React from 'react';
import IgFollowButton from './igFollowButton';
import {connect} from 'react-redux';
import find from 'lodash/collection/find';

function selectParkInfo(state,props){
	const { parkId } = props;
	const { parks, follows } = state;
	const parkData = find(parks, park => (park.id === parkId));
	const isFollowing = follows.indexOf(parkId) >= 0 ? true : false;
	return {parkData, parkId, isFollowing}
}

class IgParkInfo{
	render(){
		const {parkId, isFollowing, parkData:{name, city, state}} = this.props;
		return (<div className="flex-parent-row flex-row-top" style={{margin:'30px 10px'}}>
			<div className="flex-child-expand">
				<h2 style={{fontSize:'2.2em',fontWeight:'200',margin:0}}>{name}</h2>
				<p style={{margin:'5px 0 0 0',fontWeight:'400'}}>{city}, {state}</p>
			</div>
			
			<IgFollowButton parkId={parkId} size="lg" isFollowing={isFollowing}/>
		</div>);
	}
}

export default connect(selectParkInfo)(IgParkInfo);