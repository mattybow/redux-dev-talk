import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {IgNav} from '../../components/igComps';

function selectFeedData(state){
	return {apiKey:state.apiKey};
}

class Feed extends Component{
	static contextTypes = {
		router: PropTypes.object.isRequired
	};
	componentWillMount(){
		if(!this.props.apiKey){
			this.context.router.replaceWith('/igapp/parks');
		}
	}
	render(){
		return <div>
			<div className="park-list-ctrls flex-parent-row">
				<IgNav activeLink="feed"/>
			</div>
			<div style={{margin:15}}>feed</div>
		</div>;
	}
}

export default connect(selectFeedData)(Feed)