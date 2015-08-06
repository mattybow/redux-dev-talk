import React, {Component} from 'react';

class TestComp{
  // shouldComponentUpdate(){
  //  return false;
  // }
  render(){
    console.log('dumb TestComp render');
    return <div>Child {this.props.text}</div>;
  }
}

export default class TestCompContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      updated:new Date().valueOf()
    }
  }
  changeState(){
    this.setState({updated:new Date().valueOf()});
  }
  render(){
    const testText = 'Ben';
    return <div>
      <div>Parent State {this.state.updated}</div>
      <button onClick={::this.changeState}>update</button>
      <TestComp text={testText} />
    </div>
  }
}