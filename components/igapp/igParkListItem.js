import React from 'react';
import IgImg from './igImg';
import {Link} from 'react-router';
import getParkAlias from '../../utils/removeSpaces';

export default class IgParkListItem{
	render(){
		const {alias,city,state,imgPath} = this.props.parkData;
		const parkParam = getParkAlias(alias);
		const parkUrl = `/igapp/park/${parkParam}`;
		const parkImgPath = imgPath ? imgPath : "../assets/acadia-national-park.jpg";
		return (<div style={{marginBottom:20, overflow:'hidden', width:'30%', margin:'10px'}}>
			
			<div className="igListItemImg">
				<Link to={parkUrl}>
					<IgImg src={parkImgPath} useBgImg={true}/>
				</Link>
			</div>
			<div className="flex-parent-row" style={{padding:'10px 10px 10px 15px',backgroundColor:'rgba(255,255,255,.3)',minHeight:50, borderBottom:'1px solid rgba(0,0,0,.1)'}}>
				<div className="list-info">
					<div className="flex-child-expand">
						<div>{alias}</div>
						<div style={{fontSize:'.8em',textTransform:'uppercase',color:'rgba(0,0,0,.7)'}}>{city}-{state}</div>
					</div>
					<button className="btn-default">FOLLOWING</button>
				</div>
			</div>
			
		</div>);
	}
}