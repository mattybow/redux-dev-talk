import React from 'react';
import {connect} from 'react-redux'
import {incrementCounter} from '../actions/counterActions';

function selectCounter(state){
	console.log(state);
	const {cr1:{counter1,color}} = state;
	return {counter1, color};
}

class Counter{
	handleClick(){
		this.props.dispatch(incrementCounter());
	}
	render(){
		return <div>
			<span>Counter&nbsp;</span>
			<button onClick={::this.handleClick} className="btn-default">increment</button>
			<span style={{color:this.props.color}}>&nbsp;{this.props.counter1}</span>
		</div>;
	}
}

export default connect(selectCounter)(Counter);