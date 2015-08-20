import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {IgParkPhotoViewer} from '../../components/igComps';
import NeedsLoginWrapper from './needsLogin';
import getParkAlias from '../../utils/removeSpaces';

function getPark(alias,parks){
	return parks.filter(park =>{
		let record = getParkAlias(park.alias);
		let regex = new RegExp(record+'$','i');
		return alias.match(regex) ? true : false;
	});
}


function select(state,props){
	return {
		parks:state.parks
	}
}

class ParkPage{
	render(){
		console.log(this.props);
		let {params:{alias}, parks} = this.props;
		let park = getPark(alias,parks);	//try to match route param with known list of parks

		if(park.length === 1){				//we have a match
			const {name, id} = park[0];
			return <div style={{padding:'0 50px'}}>
				<h2>{name}</h2>
				<NeedsLoginWrapper msg="sorry, you need to login to access this portion of the app">
					<IgParkPhotoViewer igId={id} />
				</NeedsLoginWrapper>
			</div>;
		} else if (park.length > 1){		//we matched more than one, ask for user input
			return (<div>
				Did you mean?
				<ul>
					{park.map(p=>{
						let noSpaceName = getParkAlias(p.alias);
						let url = `/igapp/park/${noSpaceName}`;
						return <li><a href={url}>{p.name}</a></li>;
						})
					}
				</ul>
			</div>);
		}
		return <div>sorry mate did not find that park</div>;  //no idea what user was trying to navigate to
	}
}

export default connect(select)(ParkPage);