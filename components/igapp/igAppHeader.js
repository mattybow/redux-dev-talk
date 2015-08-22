import React from 'react';
import IgLogin from './igLogin';
import {Link} from 'react-router';

export default class igAppHeader {
	render() {
		return (
			<div id="ig-header">
				<div className="ig-header-content flex-parent-row">
					<div className="ig-font" style={{fontSize:'1.7em'}}><Link to="/igapp/parks" style={{color:'#3C3B38'}}>Ig parks</Link></div>
					<div style={{textAlign:'right'}}>
						<IgLogin />
					</div>
				</div>
			</div>
		);
	}
}
