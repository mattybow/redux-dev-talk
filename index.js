import React from 'react';
import routes from './views/routes';
import createLocation from 'history/lib/createLocation';
import App from './views/app';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();
const location = createLocation(document.location.pathname+document.location.search);

React.render(
	<App history={history} routes={routes}/>,
	document.getElementById('root')
);


