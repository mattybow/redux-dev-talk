import React from 'react';
import {connect} from 'react-redux';
import IgPhotoViewer from './igPhotoViewer';
import NeedsLogin from './needsLogin';
import * as igActions from '../../actions/igActions';

function selectPhotosForPark(state,props){
	const {parkId} = props;
	return {
		photoData:state.parkPhotos[parkId]
	}
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
	render(){
		return <NeedsLogin msg="sorry, you need to login to access this portion of the app">
			<IgPhotoViewer data={this.props.photoData || []} />
		</NeedsLogin>
	}
}

export default connect(selectPhotosForPark)(IgParkPhotoViewer)