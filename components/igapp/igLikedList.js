import React from 'react';
import IgPhotoViewer from './igPhotoViewer';
import NeedsLogin from './needsLogin';
import {connect} from 'react-redux';

function selectLikedPhotos(state){
	return {photoData:state.likes};
}

class IgLikedList{
	render(){
		return <div style={{marginTop:30}}>
			<NeedsLogin msg="please login to view your liked photos">
				<IgPhotoViewer data={this.props.photoData}/>
			</NeedsLogin>
		</div>;
	}
}

export default connect(selectLikedPhotos)(IgLikedList);