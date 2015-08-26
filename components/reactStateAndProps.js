import React, {Component} from 'react';

const COLORS = 'aquamarine burlywood darkorchid cornflowerblue turquoise tomato springgreen sandybrown salmon royalblue'.split(' ');
function getRandomColor(){
	const index = Math.floor(Math.random()*10);
	return COLORS[index];
}


class Parent extends Component{
	constructor(props){
		super(props);
		this.state = {childComps:0}
	}
	handleClick(e){
		e.stopPropagation();
		const {childComps} = this.state;
		this.setState({childComps:childComps + 1});
	}
	render(){
		const {stateHex, propHex, childComps } = this.state
		const randColor = getRandomColor();

		return <div onClick={::this.handleClick} className="component-container" style={{width:'100%',fontSize:'.8em'}}>
			<div className="component-props-and-state" style={{backgroundColor:this.props.color || 'transparent'}}>
				<div className="flex-child-expand" style={{marginLeft:10}}>
					receives PROPS: {JSON.stringify(this.props)}
				</div>
				<div className="flex-child-expand" style={{textAlign:'right',marginRight:10}}> 
					STATE: {JSON.stringify(this.state)}
				</div>
			</div>
			{childComps ? this.renderChildren(childComps, randColor) : <div/>}
		</div>
	}
	renderChildren(childComps, colorProp){
		const children = [];
		for(var i = 0; i < childComps ; i++){
			children.push(<Parent key={i} color={colorProp}/>);
		}
		return (<div className="child-container" style={{borderLeft:`3px solid ${colorProp|| 'transparent'}`}}>
			hands down {colorProp}
			{children}
		</div>);
	}
}



export default class ReactStateAndProps{
	render(){
		return <div>
			<h2>React Components: State and Props</h2>
			<Parent/>
		</div>
	}
}