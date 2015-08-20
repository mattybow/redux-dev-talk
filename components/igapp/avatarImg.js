import React from 'react';

export default class AvatarImg{
	render(){
		const {src, size} = this.props;
		const holderStyle = {
			width:size,
			height:size,
			borderRadius:size,
			border:'1px solid lightgrey',
			overflow:'hidden'
		};
		const imgStyle = {
			width:size,
			height:'auto'
		};
		return <div className="img-holder" style={holderStyle}>
			<img style={imgStyle} src={src} alt=""/>
		</div>
	}
}