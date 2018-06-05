import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import {store} from './logincomponent';
import { connect } from 'react-redux';


class Swimming extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};
		this.paymentMode = this.paymentMode.bind(this);
	}
	
	
	componentDidMount() {
		$("#menuStrip>li:first-child>a").removeClass("active");
	}
	

	componentWillUnmount() {
		
	}
	
	
	paymentMode(event){
		store.dispatch({type: "payment"});
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
										<h6><label>Swimming for beginners</label>10 Classes = <span>$100</span></h6>
										<span>
											<span>Pay By:</span>
											<label><input id="card" type="radio" name={"payment"} defaultChecked />Card</label>
											<label><input id="cash" type="radio" name={"payment"} />cash</label>
											<div><Link to={"/payment"} name="paynow" onClick={this.paymentMode}>pay now</Link></div>
										</span>
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
export default Swimming;