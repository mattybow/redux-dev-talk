import React from 'react';
import {connect} from 'react-redux';
import {IgParkListItem, IgParkSearch, IgNav} from '../../components/igComps';
import reduce from 'lodash/collection/reduce';

@connect(state => {
	const {parks,follows,parkListFilter} = state;
	return {parks,follows,parkListFilter};
})
export default class ParkList{
	isFollowing(parkId){
		return this.props.follows.indexOf(parkId) >= 0 ? true : false;
	}
	renderList(){
		let that = this;
		const {name,term} = this.props.parkListFilter;

		return reduce(this.props.parks, 
				(result,park) => {
					let displayPark = true;
					if(name==='following' && !that.isFollowing(park.id)){	//if not following, do not display
						displayPark = false;
					} else if (name==='search' && term && !park.name.match(new RegExp(term,'i'))){  //if we are searching and there is a term and we don't match the park name, do no display
						displayPark = false;
					}
					if(displayPark){
						result.push(<IgParkListItem parkData={park} key={park.id} isFollowing={that.isFollowing(park.id)}/>);
					}
					return result;
				},[]);
	}

	render(){
		return (<div>
			<div className="park-list-ctrls flex-parent-row">
				<IgNav activeLink="parks"/>
				<IgParkSearch/>
			</div>
			<div className="park-flex">
			{this.renderList()}
			</div>
		</div>);
	}
}