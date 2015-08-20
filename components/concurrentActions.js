import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as concurrentActions from '../actions/concurrentActions';

class Button2{
	render(){
		return <button onClick={this.props.fire}>Button 2 {this.props.value}</button>;
	}
}

class Button1{
	render(){
		return <button onClick={this.props.fire}>Button 1 {this.props.value}</button>;
	}
}

@connect(state=>({buttonData:state.concurrentTest}))
export default class ConcurrentActionsContainer{
	render(){
		const actions = bindActionCreators(concurrentActions, this.props.dispatch);
		console.log(this.props.buttonData);
		return (<div>
			<Button1 fire={actions.fireButton1} value={this.props.buttonData.button1text}/>
			<Button2 fire={actions.fireButton2} value={this.props.buttonData.button2text}/>
		</div>);
	}
}

/*export default class ConcurrentActionsContainer extends Component{
	static contextTypes = {
      store: PropTypes.any.isRequired
    };
	render(){
		console.log(this.context);
		return <ConcurrentActionButton fireCounter={this.context.store.dispatch.bind(this,{type:'COUNTER_CONCURRENT_ACTION'})}/>;
	}
}*/