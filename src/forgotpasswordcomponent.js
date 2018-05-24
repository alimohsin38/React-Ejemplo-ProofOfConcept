import React, { Component } from 'react';
import {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import Email from './emailcomponent';
import {store} from './logincomponent';
import { connect } from 'react-redux';


class Forgotpassword extends Component{
	constructor(props){
		super(props);
		this.state = {submit: false};
		this.forgotPasswordSubmit = this.forgotPasswordSubmit.bind(this);
		this.cancel = props.cancel;
	}
	
	
	forgotPasswordSubmit(event){
		if(this.state.submit != true){
			this.setState({submit: true});
			this.props.history.push('/emailsent');
			event.preventDefault();
		}
		event.preventDefault();
	}
	
	
	render(){
		$(document).ready(function(){
			$(".loginPopup").css({"opacity":"1", "transform": "rotateX(0deg)"});
		});
		const email = ()=>{if(this.props.state.valid){$("input[name='submit']").attr('type', 'submit');}}
		if(this.state.submit != true){
			return(
				<div className={"container-fluid"}>
					<div className={"row"}>
						<div className={"container noPadding"}>
							<div className={"col displayFlex noPadding"}>
								<div className={"col noPadding"}></div>
								
								<div className={"col-6 noPadding"}>
									<div className={"loginContainer"}>
										<div className={"loginBk"}></div>									
										<div className={"loginPopup"}>
											<h3 className={"textSizeOverride"}>Forgot Password</h3>
											<form method="get" action="" onSubmit={this.forgotPasswordSubmit}>
												<Email />													
												<input onMouseDown={email()} type="button" className={"btn btn-success"} name="submit" value="Submit" />
												<Link to="/" onClick={this.cancel} className={"btn btn-success"} name="cancel">Cancel</Link>
											</form>
										</div>									
									</div>
								</div>
								
								<div className={"col noPadding"}></div>
							</div>
						</div>
					</div>
				</div>
			)
		}else{
			return(
				<div className={"container-fluid"}>
					<div className={"row"}>
						<div className={"container noPadding"}>
							<div className={"col displayFlex noPadding"}>
								<div className={"col noPadding"}></div>
								
								<div className={"col-6 noPadding"}>
									<div className={"loginContainer"}>
										<div className={"loginBk"}></div>									
										<div className={"loginPopup"}>											
											<form name={'message'} method="get" action="">
												<h5>An email has been sent to your email address.</h5>
												<Link style={{"margin": "20px 0px", "float": "none"}} to="/" onClick={this.cancel} className={"btn btn-success"} name="cancel">Back to Login</Link>
											</form>
										</div>									
									</div>
								</div>
								
								<div className={"col noPadding"}></div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}
const mapStateToProps = (state) => {return {state:state}}
const mapDispatchToProps = (dispatch) => {return {cancel: () => {dispatch({type: false})}}}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Forgotpassword));