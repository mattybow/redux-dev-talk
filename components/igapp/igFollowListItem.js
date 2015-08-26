import React from 'react';
import IgFollowButton from './igFollowButton';
import {Link} from 'react-router';
import removeSpaces from '../../utils/removeSpaces';

export default class IgFollowListItem{
	render(){
		const {name, id, alias} = this.props.data;
		return <li className="follow-list-item flex-parent-row">
			<div className="flex-child-expand"><Link to={`/igapp/park/${removeSpaces(alias)}`}>{name}</Link></div>
			<IgFollowButton isFollowing={this.props.isFollowing} parkId={id}/>
		</li>
	}
}