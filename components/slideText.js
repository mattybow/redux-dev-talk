export default {
  reduxTitle:"Redux",
  reduxIntro:`## What is redux
  ----
  - tool for handling application state and more text to see what happens
  - implementation of [flux](http://facebook.github.io/flux/)

  
  \`\`\`js
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
  \`\`\`
  `,
  s2:"Slide 2",
  markdownSlide:`## here is some markup
  ---
  ### not sure what I should write`
}