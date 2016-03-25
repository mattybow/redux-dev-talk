import React from 'react';
import routes from './views/routes';
import App from './views/app';
import { useRouterHistory } from 'react-router'
import {createHistory} from 'history';
console.log(window.location.pathname);
const history = useRouterHistory(createHistory)({
  basename: window.location.pathname
})

React.render(
	<App history={history} routes={routes}/>,
	document.getElementById('root')
);
