import React, {Component} from 'react';


export default class Hello extends Component{
	constructor(props){
		super(props);
		this.state= {handles:['@dan_abramov', '@acdlite', '@jack']};
	}
	render(){
		return <div>
			EXAMPLE
		</div> ;
	}
}

//props
/*
class Greeting{
	render(){
		return <div>
			{this.props.salutation}&nbsp;
			<i>{this.props.twHandle}</i>
		</div>;
	}
}
*/
//expressions
//composability
/*
			{this.state.handles.map((twHandle)=>(
				<Greeting salutation="hello" twHandle={twHandle}/>)
			)}

*/
