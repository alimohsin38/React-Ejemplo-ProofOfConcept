import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';


class Payment extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};
	}
	
	
	render(){		
		return(			
			<div className={"container-fluid bgContainer"}>
				<div className={"row"}>
					<div className={"container noPadding"}>
						<div className={"col noPadding subMenuclasses"}>
							<div>
								<h3>Payment completed successfully.</h3>								
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Payment;