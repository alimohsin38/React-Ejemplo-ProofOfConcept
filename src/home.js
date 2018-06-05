import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';
import Header from './headercomponent';
import Container from './containercomponent';
import Footer from './footercomponent';


class Home extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};		
	}
	
	
	render(){			
		return(
			<div className={"wrapper"}>	
				<Header />
				
				<Container />
				
				<Footer />
			</div>
		)		
	}
}
export default Home;