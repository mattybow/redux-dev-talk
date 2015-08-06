export default {
  reduxTitle:"Redux",
  reduxIntro:`
## What is Redux

----
- tool for handling application state
- implementation of [flux](http://facebook.github.io/flux/)
  `,
  s2:"TEXT SLIDE",
  markdownSlide:`## here is some markup
  ---

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
`
}