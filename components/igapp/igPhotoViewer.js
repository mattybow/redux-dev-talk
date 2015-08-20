import React from 'react';
import IgImg from './igImg';

export default class IgPhotoViewer{
	render(){
		return <div className="photo-viewer">
			{this.props.data.map(photo =>{
				return <IgImg src={photo.images.standard_resolution} />;
			})}
		</div>
	}
}