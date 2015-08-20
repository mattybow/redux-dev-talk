import React from 'react';

export default class IgImg{
	render(){
		const style = {
			backgroundImage:`url(${this.props.src})`,
			backgroundPosition:'50% 50%',
			backgroundRepeat:'no-repeat',
			backgroundSize:'cover',
			display:'inline-block',
			width:'100%',
			height:'100%'
		}
		if(this.props.useBgImg){
			return <div style={style}></div>;
		}
		return <img src={this.props.src} alt="" style={{maxWidth:'100%',maxHeight:'100%'}}/>;
	}
}