import React from 'react';

const diagramStyle={
  display:'-webkit-flex',
  flexFlow:'row nowrap',
  WebkitJustifyContent:'space-around',
  justifyContent:'space-around',
  alignItems:'center',
  WebkitAlignItems:'center',
  width:'100%',
  height:'100%',
  position:'absolute',
  top:0,
  left:0
}

export default class Diagram{
  render(){
    return (<div style={diagramStyle}>
      {this.props.children}
    </div>);
  }
}