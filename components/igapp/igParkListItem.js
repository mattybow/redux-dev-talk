import React from 'react';
import IgImg from './igImg';
import IgFollowButton from './igFollowButton';
import {Link} from 'react-router';
import getParkAlias from '../../utils/removeSpaces';

export default class IgParkListItem{
	render(){
		const {parkData:{alias,city,state,imgPath,id},isFollowing }= this.props;
		const parkParam = getParkAlias(alias);
		const parkUrl = `/igapp/park/${parkParam}`;
		const parkImgPath = imgPath ? imgPath : "https://s3.amazonaws.com/reduxparks/acadia-national-park.jpg";
		return (<div className="park-list-item">

			<div className="igListItemImg">
				<Link to={parkUrl}>
					<IgImg src={parkImgPath} useBgImg={true}/>
				</Link>
			</div>
			<div className="flex-parent-row" style={{padding:'10px 10px 10px 15px',backgroundColor:'rgba(255,255,255,.3)',minHeight:56, borderBottom:'1px solid rgba(0,0,0,.1)'}}>
				<div className="list-info">
					<div className="flex-child-expand">
						<div>{alias}</div>
						<div style={{fontSize:'.8em',textTransform:'uppercase',color:'rgba(0,0,0,.7)'}}>{city}-{state}</div>
					</div>
					<IgFollowButton parkId={id} size="sm" isFollowing={isFollowing}/>
				</div>
			</div>

		</div>);
	}
}
