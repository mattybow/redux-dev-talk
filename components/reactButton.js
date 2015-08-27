import React, {Component} from 'react';

/*export default class ReactButton {
	render(){
		return <div style={{margin:'0 10px'}}>
			<button 
				className="btn-default">
				Hjjhkh
			</button>
		</div>;
	}
}*/


/*export default class ReactButton extends Component{
	constructor(props){
		super(props);
		this.state={isActive:false};
	}
	clickHandler(){
		const curState = this.state.isActive;
		this.setState({isActive:!curState});
	}
	render(){
		const buttonState = `btn-default ${this.state.isActive ? 'active' : 'inactive'}`;
		return <div style={{margin:'0 10px'}}>
			<button 
				className={buttonState}
				onClick={::this.clickHandler}>
				{this.props.buttonText}
			</button>
		</div>;
	}
}*/

export default class ReactButton{
	render(){
		const buttonState = `btn-default ${this.props.isActive ? 'active' : 'inactive'}`;
		return <div style={{margin:'0 10px'}}>
			<button 
				className={buttonState}
				onClick={this.props.clickHandler}>
				{this.props.buttonText}
			</button>
		</div>;
	}
}