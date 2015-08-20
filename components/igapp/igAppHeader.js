import React from 'react';
import IgLogin from './igLogin';

export default class igAppHeader {
	render() {
		return (
			<div id="ig-header">
				<div className="ig-header-content flex-parent-row">
					<div className="ig-font" style={{fontSize:'2em'}}>Ig parks</div>
					<div style={{textAlign:'right'}}>
						<IgLogin />
					</div>
				</div>
			</div>
		);
	}
}
