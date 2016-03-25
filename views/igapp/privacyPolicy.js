import React, { Component } from 'react'

export default class PrivacyPolicy extends Component{
  render(){
    return <div style={{
        maxWidth:300,
        margin:'2em auto'
      }}>
      <h3>Privacy Policy</h3>
      <div>This app is intended as an example application for redux.</div>
      <br/>
      <div>The app
      requires your login to instagram in order for you to make requests from
      the instagram api.</div>
      <br/>
      <div>Your data is not saved on any server.  The only thing
      persisted is in your browser session.
      </div>
    </div>;
  }
}
