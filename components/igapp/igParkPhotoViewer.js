import React from 'react';
import {connect} from 'react-redux';
import IgPhotoViewer from './igPhotoViewer';
import NeedsLogin from './needsLogin';
import * as igActions from '../../actions/igActions';

function selectPhotosForPark(state,props){
	const {parkId} = props;
	const parkData = state.parkPhotos[parkId];
	const photoData = parkData ? parkData.photos : []; 
	const next_url = parkData ? parkData.next_url : '';
	const isRequesting = parkData ? parkData.isRequesting : false;
	return {photoData, next_url, isRequesting};
}

class IgParkPhotoViewer{
	fetch(){
		const {fetchIfNeeded} = igActions;
		const {parkId,dispatch} = this.props;
		dispatch(fetchIfNeeded(parkId));
	}
	componentWillMount(){
		this.fetch();
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.parkId !== this.props.parkId){
			this.fetch();
		}
	}
	componentDidMount(){
		const {fetchMorePhotos} = igActions;
		this.intervalId = setInterval(()=>{
			const height = document.body.scrollHeight;
			const pxToVpBottom = window.innerHeight + document.body.scrollTop;
			const pxLeft = height - pxToVpBottom;
			const {dispatch, parkId, next_url, isRequesting} = this.props;
			if(pxLeft < 300 && this.props.next_url && !isRequesting){
				dispatch(fetchMorePhotos(parkId, next_url))
			}
		},12);
	}
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
	render(){
		console.log('PARK PHOTO VIEWER', this.props.photoData);
		return <NeedsLogin msg="sorry, you need to login to access this portion of the app">
			<IgPhotoViewer data={this.props.photoData} />
		</NeedsLogin>
	}
}

export default connect(selectPhotosForPark)(IgParkPhotoViewer)