export default {
  reduxTitle:"Redux",
  componentLifeCycle:`
## Component Lifecycle Methods
\`\`\`js
//MOUNTING
  componentWillMount
  componentDidMount
\`\`\`
\`\`\`js
//UPDATING
  componentWillReceiveProps
  shouldComponentUpdate
  componentWillUpdate
  componentDidUpdate
\`\`\`
\`\`\`js
//UNMOUNTING
  componentWillUnmount
\`\`\`
`,
  removingDataFromComponents1:`
<div class="flex-parent-row flex-row-space-between">
  <img src="../assets/amazon.png"/>
</div>
`,
  removingDataFromComponents2:`
<div class="flex-parent-row flex-row-space-between">
  <img src="../assets/amazon1.png"/>
</div>
`,
  removingDataFromComponents3:`
<div class="flex-parent-row flex-row-space-between">
  <img src="../assets/amazon2.png"/>
</div>
`,
  removingDataFromComponents4:`
<div class="flex-parent-row flex-row-space-between">
  <img src="../assets/amazon3.png"/>
</div>
`,
  removingDataFromComponents5:`
<div class="flex-parent-row flex-row-space-between">
  <img src="../assets/amazon.png"/>
  <div>
    <h3>store</h3>
    <ul>
      <li class="none normal">{ itemId:1234, qty:1 }</li>
      <li class="none normal">{ itemId:2345, qty:2 }</li>
    </ul>
  </div>
</div>
`,
  fluxStore:`
## Flux Store
\`\`\`
var ThreadStore = assign({}, EventEmitter.prototype, {

  init(rawMessages) {},   //stores the state

  emitChange() {},        //emits change events

  bindViewHandlers(){},   //exposes method for views to bind handlers 

  getMethods(id)          //exposes methods for views to get data

});

Dispatcher.register(      //register callback with dispatcher
  function(action) {
    switch(action.type) {
      case ActionTypes.CLICK_THREAD:
        modifyState(action);    //how to modify and store new state
        ThreadStore.emitChange();
        break;
      default:
        // do nothing
    }
  });
\`\`\`
`,
  reducers1:`
## reducers

\`\`\`js
(acc,val) => acc
\`\`\`
`,
  reducers2:`
## reducers

\`\`\`js
(acc,val) => acc

//examples
(isLightOn, lightStatus) => isLightOn

(messageList,newMessage) => messageList

\`\`\`

`,
  reducers3:`
## reducers

\`\`\`js
function messages(state,action){
  return state;
}

messages(['hi','whatsup'],{
  type:'ADD_NEW_MESSAGE',
  msg: 'yo yo yo'
});

//['hi','whatsup']
\`\`\`
`,
  reducers4:`
## reducers

\`\`\`js
function messages(state,action){
  switch(action.type) {
    case 'ADD_NEW_MESSAGE':
      return [...state,action.msg];
    default:
      return state;
  }
}

messages(['hi','whatsup'],{
  type:'ADD_NEW_MESSAGE',
  msg: 'yo yo yo'
});

//['hi','whatsup','yo yo yo']
\`\`\`
`,
  middleware1:`
## [middleware](http://rackt.github.io/redux/docs/advanced/Middleware.html)

- wraps \`dispatch()\`
- composable
- can intercept an action
- [redux-thunk](https://github.com/gaearon/redux-thunk)
- [redux-promise](https://github.com/acdlite/redux-promise)

`,
  middleware2:`
## middleware

\`\`\`
applyMiddleware(customMW,logger,thunk)
\`\`\`

`,
  asyncOperations:`
## Async Actions with [redux-thunk](https://github.com/gaearon/redux-thunk)
\`\`\`
function fetchIfNeeded(parkId){
  return (dispatch,getState) => {
    const state = getState();
    const { apiKey } = state;
    dispatch(requestPhotos());
    igApi.getParkPhotos(apiKey, parkId)
    .then(
      res => {
        dispatch(receivePhotos(parkId, res.body.data))
      },
      err => {
        dispatch(requestPhotosFail(err))
      }
    );
  }
}
\`\`\`
`,
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
- Components
- Composability
`,
  reactS2:`
## React JS

- View layer: description of what UI looks like
- Components
- Composability
- [Virtual Dom](https://youtu.be/-DX3vJiqxm4?t=18m32s)
- [Reconciliation (DOM diffing)](https://facebook.github.io/react/docs/reconciliation.html)
- Lifecycle Methods
`,
  render:`
## render()
- component mounted
- this.setState()
- parent render()
`,
  shouldComponentUpdate:`
## shouldComponentUpdate()

\`\`\`
shouldComponentUpdate(nextProps,nextState){
  return (
    !shallowEqual(this.props, nextProps) ||
    !shallowEqual(this.state, nextState)
  );
}
\`\`\`
`,
  singleStore:`
## Store

#### The Case for the Single Store
- any component has access to the app's entire state
- reduces need for derived data
  - less store dependencies
  - no need for waitFor
  - single source of truth
- good for async calls [(redux-thunk middleware)](https://github.com/gaearon/redux-thunk)
- serverside dehydration and rehydration clientside

`,
  ssr1:`
## Serverside rendering

- instantiate a Redux \`store\` passing initial data
- pass it to a \`<Provider/>\`
- run \`React.renderToString()\`
- run \`store.getState()\` to attach dehydrated state


`,
  ssr2:`
## Serverside rendering
\`\`\`
//psuedo code

//Create Store

let store = createStore(rootReducer,{initialTreeState});
//or
let createWithMiddleware = applyMiddleware(thunkMW,apiMW,logger)(createStore);
store = createWithMiddleware(rootReducer,{initialTreeState});

//Run Router

new Promise((resolve,reject)=>{
  Router.run(routes, location, (err, initialState) => {
    //Give provider the store
    const App = (<Provider store={store}>
        {() => <Router location={location} {...initialState}/>}
      </Provider>
    );
    resolve({App:App});
  });
}).then(app=>{
  return React.renderToString(app.App);
}).then(html){
  //do something
}
\`\`\`
`,
  reactRedux:`
## [react-redux](https://github.com/rackt/react-redux)

\`\`\`
connect(select)(Component)
\`\`\`

- links component to store
- \`connect\`'s first arg is a (state,props) => {}
- allows you to customize the state your component sees
- this is what \`shouldComponentUpdate\` sees
- this is where you can derive data
- reruns when store updates
`,
  reactReferences:`
## React References

<ul class="references">
<li>
  <img src="https://lh5.ggpht.com/jZ8XCjpCQWWZ5GLhbjRAufsw3JXePHUJVfEvMH3D055ghq0dyiSP3YxfSc_czPhtCLSO=w300-rw" alt="" />
  <p>
  [React JS Conf 2015](https://www.youtube.com/watch?v=KYzlpRvWZ6c)<br>
  Making your app fast with high-performance components
  </p>
</li>
<li>
  <img src="https://lh5.ggpht.com/jZ8XCjpCQWWZ5GLhbjRAufsw3JXePHUJVfEvMH3D055ghq0dyiSP3YxfSc_czPhtCLSO=w300-rw" alt="" />
  <p>
  [React JS Conf 2015](https://www.youtube.com/watch?v=I7IdS-PbEgI)<br>
  Immutable Data and React
  </p>
</li>
<li>
  <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" alt="" />
  <p>
  [React Rocks](http://react.rocks/)<br>
  ReactJS Examples, Demos, and Code
  </p>
</li>
<li>
  <img src="https://pbs.twimg.com/profile_images/615680132565504000/EIpgSD2K_400x400.png" alt="" />
  <p>
  [@reactjs](https://twitter.com/reactjs)<br>
  reactjs on twitter
  </p>
</li>
</ul>
`,
  reduxParts:`
## Redux Parts

- Actions
- Middleware
- Reducers
- Store
`,
  reduxConcepts:`
## Redux Concepts

<ul>
<li class="none">
  <b>Single Store</b>
  <div>the entire app's state is stored in an object tree</div>
</li>
<li class="none">
  <b>State is Read Only</b>
  <div>the only way to change the store is to dispatch an action</div>
</li>
<li class="none">
  <b>Reducers</b>
  <div>reducers are pure functions that return a transformed copy of a portion of the state tree in response to an action</div>
</li>
</ul> 
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
  reducersFlux:'Reducers + Flux = Redux',
  wins:`
## Redux wins

Single Store
You never have to \`import\` or \`require\` stores in your components



`,
  thanks:"thanks for listening",
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