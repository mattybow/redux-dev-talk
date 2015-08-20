import React from 'react';
import {connect} from 'react-redux';
import {IgParkListItem} from '../../components/igComps';

@connect(state => ({parks:state.parks}))
export default class ParkList{
	renderList(){
		let that = this;
		return this.props.parks.map(park => (<IgParkListItem parkData={park} key={park.id} />));
	}

	render(){
		return (<div>
			<div className="park-flex">
			{this.renderList()}
			</div>
		</div>);
	}
}