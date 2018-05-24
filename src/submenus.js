import React, { Component } from 'react';
import {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";


class SubmenuItems extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};
	}
	
	
	render(){
		const subMenus = this.props.value;
		return(
			<ul id={"subMenuStrip"}>
				{subMenus.map(
					(subMenus, index) => {return(<li key={index.toString()}><Link to={subMenus}>{subMenus}</Link></li>)}
				)}
			</ul>
		)
	}
}
export default SubmenuItems;