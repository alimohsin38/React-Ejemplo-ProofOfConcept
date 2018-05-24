import "babel-polyfill";
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import style from '../css/style.css';
import bootstrapcss from 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from 'font-awesome/css/font-awesome.min.css';
import App, {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";


ReactDOM.render(
	<div>
		<Favicon url="../images/favicon.png" />
		<App />
	</div>, 
	document.getElementById('root')
);