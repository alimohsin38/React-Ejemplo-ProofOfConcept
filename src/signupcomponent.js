import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import {store} from './logincomponent';
import { connect } from 'react-redux';


class Signup extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstName: "First Name", 
			lastName: "Last Name", 
			password: "Password", 
			reTypePassword: "Re-enter Password", 
			phoneNumber: "Phone Number", 
			phoneValidation: false, 
			forgotPassword: "Email", 
			emailValidation: false,
			matchPassword: false,
			emailFilled: false,
			phoneFilled: false,
			filledAllFields: false
		};
		this.firstNameChange = this.firstNameChange.bind(this);
		this.clearFirstName = this.clearFirstName.bind(this);
		this.revertFirstName = this.revertFirstName.bind(this);		
		this.lastNameChange = this.lastNameChange.bind(this);
		this.clearLastName = this.clearLastName.bind(this);
		this.revertLastName = this.revertLastName.bind(this);		
		this.passwordChange = this.passwordChange.bind(this);
		this.clearPassword = this.clearPassword.bind(this);
		this.revertPassword = this.revertPassword.bind(this);
		this.clearPasswordReType = this.clearPasswordReType.bind(this);
		this.revertPasswordReType = this.revertPasswordReType.bind(this);
		this.passwordChangeReType = this.passwordChangeReType.bind(this);
		this.passwordValidationPrevState = this.passwordValidationPrevState.bind(this);
		this.passwordValidation = this.passwordValidation.bind(this);
		this.emailChange = this.emailChange.bind(this);
		this.clearemail = this.clearemail.bind(this);
		this.revertemail = this.revertemail.bind(this);
		this.emailValidation = this.emailValidation.bind(this);
		this.phoneValidation = this.phoneValidation.bind(this);
		this.phoneNumnerChange = this.phoneNumnerChange.bind(this);
		this.clearPhoneNumber = this.clearPhoneNumber.bind(this);
		this.revertPhoneNumber = this.revertPhoneNumber.bind(this);
		this.signUpSubmit = this.signUpSubmit.bind(this);
		this.allFieldFilled = this.allFieldFilled.bind(this);
		this.showPassword = this.showPassword.bind(this);
		this.hidePassword = this.hidePassword.bind(this);
		this.cancel = props.cancel;		
	}
	
	
	firstNameChange(event){
		this.setState({firstName: event.target.value});
		$("label[name='firstNameValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
	}
	clearFirstName(){
		if(this.state.firstName == 'First Name'){
			this.setState({firstName: ''});
			$("input[name='firstname']").css({"color":"#fff"});
		}
	}
	revertFirstName(){
		if(this.state.firstName == ''){
			this.setState({firstName: 'First Name'});
			$("label[name='firstNameValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			$("input[name='firstname']").css({"color":"#888", "transition":"all 0.0s 0.0s"});
		}
	}	
	
	
	lastNameChange(event){
		this.setState({lastName: event.target.value});
		$("label[name='lastNameValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
	}
	clearLastName(){
		if(this.state.lastName == 'Last Name'){
			this.setState({lastName: ''});
			$("input[name='lastname']").css({"color":"#fff"});
		}
	}
	revertLastName(){
		if(this.state.lastName == ''){
			this.setState({lastName: 'Last Name'});
			$("label[name='lastNameValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			$("input[name='lastname']").css({"color":"#888", "transition":"all 0.0s 0.0s"});
		}
	}
	
	
	passwordChange(event){
		this.setState({password: event.target.value});
		$("label[name='passwordValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
		$("input[name='password'] ~ i[name='showHide']").css({"color": "#fff"});		
	}
	clearPassword(){
		if(this.state.password == 'Password'){
			this.setState({password: ''});
			$("input[name='password']").attr("type", "password");
			$("input[name='password']").css({"color":"#fff"});
		}
	}
	revertPassword(){
		if(this.state.password == ''){
			this.setState({password: 'Password'});
			$("label[name='passwordValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			$("input[name='password']").attr("type", "text");
			$("input[name='password']").css({"color":"#888", "transition":"all 0.0s 0.0s"});
			$("input[name='password'] ~ i[name='showHide']").css({"color": "#888"});
		}
	}
	passwordValidationPrevState(event){
		if(this.state.password != this.state.reTypePassword && this.state.reTypePassword != '' && this.state.reTypePassword != 'Re-enter Password'){
			$("label[name='passwordNotMatchedValidation']").css({"opacity":"1", "transform": "translateX(0px)", "position": "static"});
			this.setState({matchPassword: false});
		}else{
			$("label[name='passwordNotMatchedValidation']").css({"opacity":"0", "transform": "translateX(-179px)", "position": "absolute"});
			this.setState({matchPassword: true});
		}
	}
	
	
	passwordChangeReType(event){
		this.setState({reTypePassword: event.target.value});
		$("label[name='re-enterPasswordValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
		$("input[name='re-enterpassword'] ~ i[name='showHide']").css({"color": "#fff"});
	}
	clearPasswordReType(){
		if(this.state.reTypePassword == 'Re-enter Password'){
			this.setState({reTypePassword: ''});
			$("input[name='re-enterpassword']").attr("type", "password");
			$("input[name='re-enterpassword']").css({"color":"#fff"});
		}
	}
	revertPasswordReType(){
		if(this.state.reTypePassword == ''){			
			this.setState({reTypePassword: 'Re-enter Password'});
			$("label[name='re-enterPasswordValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			$("input[name='re-enterpassword']").attr("type", "text");
			$("input[name='re-enterpassword']").css({"color":"#888", "transition":"all 0.0s 0.0s"});
			$("input[name='re-enterpassword'] ~ i[name='showHide']").css({"color": "#888"});
		}
	}
	passwordValidation(event){
		if(this.state.password != this.state.reTypePassword){
			$("label[name='passwordNotMatchedValidation']").css({"opacity":"1", "transform": "translateX(0px)", "position": "static"});
			this.setState({matchPassword: false});
			
		}else{
			$("label[name='passwordNotMatchedValidation']").css({"opacity":"0", "transform": "translateX(-179px)", "position": "absolute"});
			this.setState({matchPassword: true});
		}
	}
	
	
	emailValidation(regExp){
		var emailValidation = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		if(emailValidation.test(regExp)){
			this.setState({emailValidation: true});			
			return true;
		}
		this.setState({emailValidation: false});
		return false;
	}
	emailChange(event){
		this.setState({forgotPassword: event.target.value});
		if(this.emailValidation(event.target.value)){
			$("label[name='forgotValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
			this.setState({emailFilled: true});
		}else{
			$("label[name='forgotValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			this.setState({emailFilled: false});
		}
	}
	clearemail(){
		if(this.state.forgotPassword == 'Email'){
			this.setState({forgotPassword: ''});
			$("input[name='forgotPassword']").css({"color":"#fff"});
		}
	}
	revertemail(){
		if(this.state.forgotPassword == ''){
			this.setState({forgotPassword: 'Email'});
			$("label[name='forgotValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			$("input[name='forgotPassword']").css({"color":"#888", "transition":"all 0.0s 0.0s"});
		}
	}
	
	
	phoneValidation(regExp){
		var phoneValidation = /^[0-9]{0,10}$/;
		if(phoneValidation.test(regExp)){
			this.setState({phoneValidation: true});
			return true;
		}
		this.setState({phoneValidation: false});
		return false;
	}
	phoneNumnerChange(event){		
		this.setState({phoneNumber: event.target.value});
		if(this.phoneValidation(event.target.value)){
			$("label[name='phoneNumberValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
			this.setState({phoneFilled: true});
		}else{
			$("label[name='phoneNumberValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			this.setState({phoneFilled: false});
		}	
	}
	clearPhoneNumber(){
		if(this.state.phoneNumber == 'Phone Number'){
			this.setState({phoneNumber: ''});
			$("input[name='phonenumber']").css({"color":"#fff"});
		}
	}
	revertPhoneNumber(){
		if(this.state.phoneNumber == ''){			
			this.setState({phoneNumber: 'Phone Number'});
			$("input[name='phonenumber']").css({"color":"#888","transition":"all 0.0s 0.0s"});
			$("label[name='phoneNumberValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
		}else{
			var phoneValidation = /^[0-9]{10}$/;
			if(phoneValidation.test(this.state.phoneNumber)){
				$("label[name='phoneNumberValidation']").css({"opacity":"0", "transform": "translateX(-179px)"});
				this.setState({phoneFilled: true});
			}else{
				$("label[name='phoneNumberValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
				this.setState({phoneFilled: false});
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
		}else if(inputAttrName == "re-enterpassword"){
			if(this.state.reTypePassword != '' && this.state.reTypePassword != "Re-enter Password"){
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
		}else if(inputAttrName == "re-enterpassword"){
			if(this.state.reTypePassword != '' && this.state.reTypePassword != "Re-enter Password"){
				$(inputTag).attr("type", "password");
				$(iTag).addClass("fa-eye-slash");
				$(iTag).removeClass("fa-eye");	
			}
		}	
	}
	
	
	signUpSubmit(event){
		this.setState({filledAllFields: true});
		this.props.history.push('/detailssavedsuccessfully');
		event.preventDefault();
	}	
	allFieldFilled(){
		if(this.state.firstName != '' && this.state.firstName != 'First Name' && this.state.lastName != '' && this.state.lastName != 'Last Name' && this.state.matchPassword && this.state.password != '' && this.state.password != 'Password' && this.state.reTypePassword != '' && this.state.reTypePassword != 'Re-enter Password' && this.state.emailFilled && this.state.forgotPassword != '' && this.state.forgotPassword != 'Email' && this.state.phoneFilled && this.state.phoneNumber != '' && this.state.phoneNumber != 'Phone Number'){
			$("input[name='submit']").attr("type", "submit");
		}else{
			$("input[name='submit']").attr("type", "button");
		}
	}
	
	
	render(){
		$(document).ready(function(){
			$(".loginPopup").css({"opacity":"1", "transform": "rotateX(0deg)"});
		});
		if(this.state.filledAllFields != true){
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
											<h3 className={"textSizeOverride"}>Sign Up</h3>
											<form name="signup" method="get" action="" onSubmit={this.signUpSubmit}>										
												<label name="firstNameValidation">Please enter First Name</label>
												<input tabIndex="1" type="text" name="firstname" value={this.state.firstName} onChange={this.firstNameChange} onClick={this.clearFirstName} onFocus={this.clearFirstName} onBlur={this.revertFirstName} />
												
												<label name="lastNameValidation">Please enter Last Name</label>
												<input tabIndex="2" type="text" name="lastname" value={this.state.lastName} onChange={this.lastNameChange} onClick={this.clearLastName} onFocus={this.clearLastName} onBlur={this.revertLastName} />
												
												<label name="passwordValidation">Please enter Password</label>
												<span>
													<input tabIndex="3" type="text" name="password" value={this.state.password} onChange={this.passwordChange} onClick={this.clearPassword} onFocus={this.clearPassword} onBlur={this.revertPassword} onKeyUp={this.passwordValidationPrevState} />
													<i name={"showHide"} onMouseDown={this.showPassword} onMouseUp={this.hidePassword} className={"fa  fa-eye-slash"}></i>
												</span>
												
												<label name="re-enterPasswordValidation">Please Re-Enter Password</label>
												<label name="passwordNotMatchedValidation">Password not matched</label>
												<span>
													<input tabIndex="4" type="text" name="re-enterpassword" value={this.state.reTypePassword} onChange={this.passwordChangeReType} onClick={this.clearPasswordReType} onFocus={this.clearPasswordReType} onBlur={this.revertPasswordReType} onKeyUp={this.passwordValidation} />
													<i name={"showHide"} onMouseDown={this.showPassword} onMouseUp={this.hidePassword} className={"fa  fa-eye-slash"}></i>
												</span>
												
												<label name="forgotValidation">Please enter your email</label>
												<input tabIndex="5" type="text" name="forgotPassword" value={this.state.forgotPassword} onChange={this.emailChange} onClick={this.clearemail} onFocus={this.clearemail} onBlur={this.revertemail} />
												
												<label name="phoneNumberValidation">Please enter valid Phone Number</label>
												<input tabIndex="6" type="text" name="phonenumber" value={this.state.phoneNumber} onChange={this.phoneNumnerChange} onClick={this.clearPhoneNumber} onFocus={this.clearPhoneNumber} onBlur={this.revertPhoneNumber} />
												
												<input tabIndex="7" onClick={this.allFieldFilled} type="button" className={"btn btn-success"} name="submit" value="Submit" />
												<Link tabIndex="8" to="/" onClick={this.cancel} className={"btn btn-success"} name="cancel">Cancel</Link>
												<div style={{"height":"7px"}}></div>
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
												<h5>Your details are saved successfully.</h5>
												<Link style={{"margin": "20px 0px", "float": "none"}} tabIndex="8" to="/" onClick={this.cancel} className={"btn btn-success"} name="cancel">Back to Login</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));