import React from 'react';
import {IgAppHeader, IgAuth} from '../../components/igComps';

import './igApp.scss';

export default class IgApp extends React.Component{
	render(){
		return (<div id="igapp">
			<IgAuth/>
			<IgAppHeader/>
			<div id="ig-app-content">
				{this.props.children}
			</div>
		</div>);
	}
}