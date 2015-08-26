import React from 'react';
import {connect} from 'react-redux';
import IgImg from './igImg';
import HeartSvg from './heartSvg';
import find from 'lodash/collection/find';
import {addLikedPhoto, removeLikedPhoto} from '../../actions/igActions';

function selectIsLiked(state,props){
	const isLiked = false;
	return {isLiked};
}

class ParkPhoto{
	clickHandler(){
		const {isLiked, photoData} = this.props;
		console.log('LIKE PARK PHOTO');
	}
	addLiked(photo){
		this.props.dispatch(addLikedPhoto(photo));
	}
	removeLiked(photo){
		this.props.dispatch(removeLikedPhoto(photo));
	}
	render(){
		const {isLiked, photoData:{images}} = this.props;
		const photoUrl = this.props.size === 'lg' ? images.standard_resolution.url : images.low_resolution.url;
		const heartProps = {
			stroke: isLiked ? 'red' : 'white',
			fillColor: isLiked ? 'red' : 'none'
		}

		return (<div className="park-photo">
			<div className="photo-overlay">
				<HeartSvg {...heartProps} size={50} clickHandler={::this.clickHandler}/>
			</div>
			<IgImg src={photoUrl} />
		</div>);
	}
}

export default connect(selectIsLiked)(ParkPhoto);















/*	clickHandler(){
		const {isLiked,photoData} = this.props;
		if(isLiked){
			this.removeLiked(photoData);
		} else {
			this.addLiked(photoData);
		}
	}
	removeLiked(photo){
		this.props.dispatch(removeLikedPhoto(photo));
	}
	addLiked(photo){
		this.props.dispatch(addLikedPhoto(photo));
	}*/


/*function selectIsLiked(state,props){
	const isLiked = find(state.likes,
											photo => (photo.id === props.photoData.id)
											) ? true : false;
	return {isLiked};
}*/