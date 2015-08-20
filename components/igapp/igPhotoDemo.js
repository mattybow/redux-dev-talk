import React from 'react';
import AvatarImg from './avatarImg';
import TimeDiff from './timeDiff';
import HeartSvg from './heartSvg';
import CommentInput from './commentInput';
import IgImg from './igImg';

const feedPhotoStyles = {
	width:'50%',
	backgroundColor:'white',
	margin:'auto'
}

class Footer{
	render(){
		return (<div className="flex-parent-row" style={{padding:'10px 20px'}}>
			<HeartSvg />
			<CommentInput />
		</div>);
	}
}

class Header{
	render(){
		return (<div className="feed-photo-header">
				<div className="left-side">
					<div className="flex-parent-row">
						<AvatarImg size="30" src="http://www.digitalgov.gov/files/2014/07/250-x-328-National-Park-Service-NPS-logo-e1392216060583.jpg"/>
						<div className="text-holder" style={{marginLeft:5}}>
							<div className="name">{this.props.name}</div>
							<div className="sub-name"></div>
						</div>
					</div>
				</div>
				<div className="right-side" style={{textAlign:'right'}}>
					<TimeDiff created={this.props.created}/>
				</div>
			</div>)
	}
}

export default class IgPhotoDemo{
	render(){
		console.log(this.props.data);
		const {location:{name}, created_time, images:{standard_resolution:{url}}} = this.props.data;
		return (<div className="feed-photo-demo" style={feedPhotoStyles}>
			<Header avatarUrl="" name={name} created={created_time}/>
			<IgImg src={url}/>
			<Footer/>
		</div>);
	}
}