export default {
  reduxTitle:"Redux",
  simplicity:"Simplicity",
  reducers:'reducers',
  middleware:'middleware',
  reduxIntro:`
## What is [Redux](http://gaearon.github.io/redux/)

- tool for handling application state
- implementation of [flux](http://facebook.github.io/flux/)
  `,
  reduxWhere:`
## Where do you use Redux

  `,
  reactS1:`
## React JS

- View layer: description of what UI looks like
- Composability
`,
  reactS2:`
## React JS

- View layer: description of what UI looks like
- Composability
- [Virtual Dom](https://youtu.be/-DX3vJiqxm4?t=18m32s)
- [Reconciliation (DOM diffing)](https://facebook.github.io/react/docs/reconciliation.html)
- Lifecycle Methods
`,
  ssr:"Serverside rendering",
  reactReferences:`
## React References
`,
  reduxConcepts:`
## Redux Concepts
`,
  reduxReferences:`
## Redux References
<ul class="references">
<li>
  <img src="https://cdn-static-1.medium.com/_/fp/icons/favicon.n7eHNqdWyHhbTLN2-3a-6g.ico" alt="" />
  <p>
  [The Evolution of Flux Frameworks by Dan Abramov](https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31)<br>
  The inception post
  </p>
</li>
<li>
  <img src="https://lh5.ggpht.com/jZ8XCjpCQWWZ5GLhbjRAufsw3JXePHUJVfEvMH3D055ghq0dyiSP3YxfSc_czPhtCLSO=w300-rw" alt="" />
  <p>
  [React Europe Talk](https://www.youtube.com/watch?v=xsSnOQynTHs)<br>
  Hot Reloading with Time Travel at react-europe 2015
  </p>
</li>
<li>
  <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" alt="" />
  <p>
  [Redux Official Documentation](http://gaearon.github.io/redux/index.html)<br>
  Redux is a predictable state container for JavaScript apps
  </p>
</li>
<li>
  <img src="http://static.tumblr.com/wvuzcz9/RJJncirj0/logo-hash.png" alt="" />
  <p>
  [Slack Channel](http://www.reactiflux.com/)<br>
  Join the #redux channel within reactiflux
  </p>
</li>







</ul>
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