import React from 'react';
import ParkPhoto from './parkPhoto';

export default class IgPhotoViewer{
	render(){
		return <div className="park-photo-viewer park-flex">
			{this.props.data.map(photo =>{
				return (<ParkPhoto key={photo.id} photoData={photo} />);
			})}
		</div>
	}
}