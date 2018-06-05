import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import {store} from './logincomponent';
import { connect } from 'react-redux';


class Yoga extends Component{
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
						<div className={"col noPadding subMenuclasses"}>
							<div>
								<h6>Yoga for beginners X 10 Classes = <span>$70</span></h6>
								<span>
									<span>Pay By:</span>
									<label><input type="radio" name={"payment"} />Card</label>
									<label><input type="radio" name={"payment"} />cash</label>
									<Link to={"/payment"} name="paynow" onClick={this.paymentMode}>pay now</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Yoga;