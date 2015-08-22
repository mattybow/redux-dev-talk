import React from 'react';
import IgImg from './igImg';

class ParkPhoto{
	render(){
		return (<div className="park-photo">
			<IgImg src={this.props.src} />
		</div>);
	}
}

export default class IgPhotoViewer{
	render(){
		return <div className="park-photo-viewer park-flex">
			{this.props.data.map(photo =>{
				return (<ParkPhoto key={photo.id} src={photo.images.standard_resolution.url} />);
			})}
		</div>
	}
}