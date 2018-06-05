import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';


class Footer extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};		
	}
	
	
	render(){		
		return(							
			<div className={"container-fluid bgWhite"}>
				<div className={"row bgBlack"}>
					<div className={"container noPadding"}>
						<div className={"col displayFlex noPadding"}>
							<div className={"footer"}>
								<label>&copy;Copyright 2018. All right reserved.</label>
							</div>
						</div>
					</div>
				</div>
			</div>			
		)
	}
}
export default Footer;