import React from 'react';

const blockStyle={}

export default class Block{
  render(){
    let style = blockStyle;
    const {isHighlighted, highlightColor, clickHandler} = this.props
    if(isHighlighted){
      style = {...blockStyle,...{backgroundColor:highlightColor}};
    }
	return <div className="block" onClick={clickHandler ? clickHandler : ()=>{}} style={style}>
		<div style={{margin:'auto'}}>{this.props.name}</div>
	</div>;
  }
}