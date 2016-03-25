import React from 'react';
import routes from './views/routes';
import App from './views/app';
import { useRouterHistory } from 'react-router'
import {createHistory} from 'history';

const host = window.location.host;
console.log(host);
const history = useRouterHistory(createHistory)({
  basename: host === "mattbow.com" ? "/redux-dev-talk/" : "/"
})

React.render(
	<App history={history} routes={routes}/>,
	document.getElementById('root')
);
