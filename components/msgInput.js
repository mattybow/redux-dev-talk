import React, {Component, findDOMNode} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as msgActions from '../actions/msgActions';

const inputStyle = {
  fontSize:'1.2em',
  padding:'1em',
  borderRadius:'4px 0 0 4px',
  width:'100%',
  border:'1px solid grey',
  borderRight:0,
  outline:'none'
}

const buttonStyle = {
  padding:'5px 5%',
  fontSize:'1em',
  borderRadius:'0 4px 4px 0',
  WebkitAppearance:'none',
  backgroundColor:'transparent',
  border:'1px solid slategrey',
  textAlign:'center'
}

class MsgInput{
  handleClick(){
    const node = findDOMNode(this.refs.input);
    const msg = node.value;
    if(msg){
      node.value = '';
      this.props.addMsg(msg);
    }
  }
  handleKeyUp(e){
    if(e.which===13){
      e.preventDefault();
      this.handleClick();
    }
  }
  render(){
    //console.log(this.props);
    return (<div style={{display:'-webkit-flex', margin:'40px 20px'}}>
      <input style={inputStyle} onKeyUp={::this.handleKeyUp} type="text" ref="input" placeholder="type something"/>
      <button style={buttonStyle} onClick={::this.handleClick}>ok</button>
    </div>);
  }
}

const listStyle = {
  listStyle:'none',
  padding:0,
  margin:20
}

class MsgDisplay{
  render(){
    return (
      <ul style={listStyle}>
        {this.props.messages.map((msgObj, i)=>{
          return <li key={i} style={{padding:10,borderBottom:'1px solid rgba(0,0,0,.1)'}}>{msgObj.msg}</li>;
        })}
      </ul>
    );
  }
}

@connect(state=>({msgs:state.msgs}))
export default class MsgInputContainer{
  render(){
    //console.log(this.context);
    const {dispatch} = this.props;
    return <div style={{margin:'20px'}}>
      <a href="https://github.com/mattybow/redux-starter"><h2>Redux Starter</h2></a>
      <MsgInput {...bindActionCreators(msgActions,dispatch)}/>
      <MsgDisplay messages={this.props.msgs} />
    </div>
  }
}