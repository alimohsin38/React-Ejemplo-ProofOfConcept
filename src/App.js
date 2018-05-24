import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Login from './login';
import {store} from './logincomponent';
export const reduxStore = require('redux-store');
export const $ = require("jquery");
export const popper = require("popper.js");
export const bootstrap = require('bootstrap');
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";


class App extends Component{
	constructor(props){
		super(props);
		this.state = {value: ''};
	}
	
	
	render(){
		return(
			<Provider store={store}>
				<Router>
					<Login />
				</Router>
			</Provider>
		)
	}
}
export default App;