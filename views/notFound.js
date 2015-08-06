import React from 'react';

export default class NotFound{
  render(){
    console.log(this.state, this.props);
    return (<div>
      <h2>Page Not Found</h2>
      <p>Route: {this.props.location.state.badPath}</p>
      <p>{this.props.location.state.errorMsg}</p>
    </div>);
  }
}