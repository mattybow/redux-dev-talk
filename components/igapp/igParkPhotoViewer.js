import React from 'react';
import {connect} from 'react-redux';
import IgPhotoViewer from './igPhotoViewer';
import * as igActions from '../../actions/igActions';

function selectPhotosForPark(state,props){
	const park = props.igId;
	return {
		photoData:state.parkPhotos[park]
	}
}

class IgParkPhotoViewer{
	fetch(){
		const {fetchIfNeeded} = igActions;
		const {igId,dispatch} = this.props;
		dispatch(fetchIfNeeded(igId));
	}
	componentWillMount(){
		this.fetch();
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.igId !== this.props.igId){
			this.fetch();
		}
	}
	render(){
		return <IgPhotoViewer data={this.props.photoData || []} />
	}
}

export default connect(selectPhotosForPark)(IgParkPhotoViewer)