import React, { Component } from 'react';
import {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import {store} from './logincomponent';
import { connect } from 'react-redux';


class SubmenuItems extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};
		this.itemClicked = this.itemClicked.bind(this);
	}
	
	
	itemClicked(event){
		const clickedVal = $((event.target)).text();		
		if(clickedVal == "aerobics"){
			store.dispatch({type: clickedVal});
			
		}else if(clickedVal == "swimming"){
			store.dispatch({type: clickedVal});
			
		}else if(clickedVal == "yoga package"){
			store.dispatch({type: clickedVal});
			
		}else if(clickedVal == "kick boxing"){
			store.dispatch({type: clickedVal});
		}		
	}
	
	
	render(){
		const subMenus = this.props.value;
		return(
			<ul id={"subMenuStrip"}>
				{subMenus.map(
					(subMenus, index) => {return(<li key={index.toString()}><Link to={subMenus} onClick={this.itemClicked}>{subMenus}</Link></li>)}
				)}
			</ul>
		)
	}
}
export default SubmenuItems;