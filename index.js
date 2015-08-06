import React from 'react';
import routes from './views/routes';
import Location from 'react-router/lib/Location';
import App from './views/app';
import {Router} from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';

const location = new Location(document.location.pathname, document.location.search);
Router.run(routes, location, (err, initialState)=>{
  React.render(
    <App initialState={initialState} history={new BrowserHistory} routes={routes}/>,
    document.getElementById('root')
  );
});

