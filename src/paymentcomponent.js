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
						<div className={"col displayFlex noPadding"}>
							<div className={"col col-xl-3 col-lg-3 col-md-3 col-sm-3 noPadding"}></div>
							
							<div className={"col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 noPadding"}>
								<div className={"subMenuclasses"}>
									<div>
										<h3>Payment completed successfully.</h3>
									</div>
								</div>
							</div>
							
							<div className={"col col-xl-3 col-lg-3 col-md-3 col-sm-3 noPadding"}></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Payment;