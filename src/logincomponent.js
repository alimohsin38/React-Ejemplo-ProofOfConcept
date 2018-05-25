import React, { Component } from 'react';
import {$, popper, bootstrap} from './App';
import Home from './home';
import { connect } from 'react-redux';
import { Field, Form, actions } from 'react-redux-form';
import {createStore} from 'redux';
import {reducer} from './reducer';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
export const store = createStore(reducer);
export const userNameAndPassword = {defaultUser: "Adam"};


class Logincomponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			userName: 'Username', 
			password: "Password", 
			home: false, 
			defaultUser: userNameAndPassword.defaultUser, 
			defaultPassword: "adam", 
			textLogin: "Login"
		};		
		this.userNameChange = this.userNameChange.bind(this);
		this.clearUserName = this.clearUserName.bind(this);
		this.revertUserName = this.revertUserName.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.clearPassword = this.clearPassword.bind(this);
		this.revertPassword = this.revertPassword.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.showPassword = this.showPassword.bind(this);
		this.hidePassword = this.hidePassword.bind(this);
		this.clickForgotPassword = props.clickForgotPassword;
		this.login = this.login.bind(this);
		this.signUp = props.signUp;
	}
	
	
	componentDidMount() {
		if(navigator.userAgent.search("Firefox") >= 0){	
			$("input[name='password']").attr("type", "password");
			$("i[name='showHide']").css({"display":"none"});
		}
	}

	
	componentWillUnmount() {

	}
  
	
	userNameChange(event){
		this.setState({userName: event.target.value});
		$("label[name='usernameValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
	}
	clearUserName(){
		if(this.state.userName == 'Username'){
			this.setState({userName: ''});
			$("input[name='username']").css({"color":"#fff"});
		}
	}
	revertUserName(){
		if(this.state.userName == ''){
			this.setState({userName: 'Username'});
			$("label[name='usernameValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			$("input[name='username']").css({"color":"#888", "transition":"all 0.0s 0.0s"});
		}
	}
	
	
	passwordChange(event){
		this.setState({password: event.target.value});
		$("label[name='passwordValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
		$("form span i").css({"color": "#fff"});
	}
	clearPassword(){
		if(this.state.password == 'Password'){
			this.setState({password: ''});
			$("input[name='password']").css({"color":"#fff"});			
			if(navigator.userAgent.search("Firefox") >= 0){	
				$("input[name='password']").attr("type", "password");
			}else{
				$("input[name='password']").attr("type", "password");
			}
		}
	}
	revertPassword(){
		if(this.state.password == ''){
			this.setState({password: 'Password'});
			$("label[name='passwordValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			$("input[name='password']").css({"color":"#888", "transition":"all 0.0s 0.0s"});
			$("form span i").css({"color": "#888"});			
			if(navigator.userAgent.search("Firefox") >= 0){	
				$("input[name='password']").attr("type", "password");
			}else{
				$("input[name='password']").attr("type", "text");
			}
		}
	}
	
	
	
	showPassword(event){
		var inputAttrName = $(event.target).parents('span').children('input')[0].name;
		var iTag = $(event.target).parents('span').children('i')[0];
		var inputTag = $(event.target).parents('span').children('input')[0];		
		if(inputAttrName == "password"){
			if(this.state.password != '' && this.state.password != "Password"){
				$(inputTag).attr("type", "text");
				$(iTag).removeClass("fa-eye-slash");
				$(iTag).addClass("fa-eye");	
			}
		}		
	}
	hidePassword(event){
		var inputAttrName = $(event.target).parents('span').children('input')[0].name;
		var iTag = $(event.target).parents('span').children('i')[0];
		var inputTag = $(event.target).parents('span').children('input')[0];		
		if(inputAttrName == "password"){
			if(this.state.password != '' && this.state.password != "Password"){
				$(inputTag).attr("type", "password");
				$(iTag).addClass("fa-eye-slash");
				$(iTag).removeClass("fa-eye");	
			}
		}
	}
	
	
	formSubmit(event){
		if(this.state.userName == '' || this.state.userName == 'Username'){
			$("label[name='usernameValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			event.preventDefault();
		}else if(this.state.password == '' || this.state.password == 'Password'){
			$("label[name='passwordValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			event.preventDefault();
		}else if(this.state.userName == this.state.defaultUser && this.state.password == this.state.defaultPassword){
			$("h4[name='userNamePsswordIncorrect']").css({"opacity":"0"});
			$(".loginContainer .loginPopup h3 i.loader").css({"display":"inline-block", "opacity":"1"});
			this.props.history.push('/home');
			this.setState({textLogin: "Logging In"});
			setTimeout(() => {
				$(".loginContainer .loginPopup h3 i.loader").css({"display":"none", "opacity":"0"});
				this.setState({home: true});
			}, 1000);
		}else{
			$("h4[name='userNamePsswordIncorrect']").css({"opacity":"1"});
			$(".loginContainer .loginPopup h3 i.loader").css({"display":"none", "opacity":"0"});
			this.setState({home: false});
			this.setState({textLogin: "Login"});
		}
		event.preventDefault();
	}
	login(event){
		if(this.state.userName != '' && this.state.userName != "Username" && this.state.password != '' && this.state.password != "Password"){
			$("input[name='submit']").attr("type", "submit");
		}else{
			$("input[name='submit']").attr("type", "button");
		}
	}
	
	render(){
		$(document).ready(function(){
			$(".loginPopup").css({"opacity":"1", "transform": "rotateX(0deg)"});
		});
		if(this.state.home && this.props.state != 3){
			return(<Home />);
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
											<h3>{this.state.textLogin}<i className={"loader fa fa-spinner fa-spin"}></i></h3>
											<h4 name={"userNamePsswordIncorrect"} className={"userNamePsswordIncorrect"}>Incorrect Username and Password</h4>
											<form method="get" action="" onSubmit={this.formSubmit}>
												<label name="usernameValidation">Please enter Username</label>
												<input tabIndex="1" type="text" name="username" value={this.state.userName} onChange={this.userNameChange} onClick={this.clearUserName} onFocus={this.clearUserName} onBlur={this.revertUserName} />
												
												<label name="passwordValidation">Please enter Password</label>
												<span>
													<input tabIndex="2" type="text" name="password" value={this.state.password} onChange={this.passwordChange} onClick={this.clearPassword} onFocus={this.clearPassword} onBlur={this.revertPassword} />
													<i name={"showHide"} onMouseDown={this.showPassword} onMouseUp={this.hidePassword} className={"fa  fa-eye-slash"}></i>
												</span>
												
												<label className={"textUnderline"} onClick={this.clickForgotPassword}>
													<Link to="/forgotpassword">forgot password</Link>
												</label>
												<input onChange={this.login} onClick={this.login} type="Button" className={"btn btn-success"} name="submit" value="Login" />
												<div>
													<label onClick={this.signUp} className={"textUnderline"} name="newuser">
														<Link to="/signup">Sign-Up</Link>
													</label>
												</div>
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
const mapDispatchToProps = (dispatch) => {return {clickForgotPassword: () => {dispatch({type: true})}, signUp: () => {dispatch({type: "signup"})}}}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logincomponent));