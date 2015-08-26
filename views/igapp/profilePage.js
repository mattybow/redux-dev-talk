import React, {Component, PropTypes} from 'react';
import {IgProfile} from '../../components/igComps';

export default class ProfilePage extends Component{
	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	componentWillMount(){
		this.context.router.replaceWith('/igapp/profile/following');
	}
	render(){
		return <div>
			<IgProfile />
			{this.props.children} 
		</div>
	}
}

