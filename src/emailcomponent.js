import React, { Component } from 'react';
import {$, popper, bootstrap} from './App';
import {store} from './logincomponent';
import { connect } from 'react-redux';


var dispatchItem = {type: "notValid", emailAddress: ''};
class Email extends Component{
	constructor(props){
		super(props);
		this.state = {forgotPassword: "Email", emailValidation: false};
		this.emailChange = this.emailChange.bind(this);
		this.clearemail = this.clearemail.bind(this);
		this.revertemail = this.revertemail.bind(this);
		this.emailValidation = this.emailValidation.bind(this);
		this.valid = props.valid;
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
			dispatchItem.type = "Valid";
			dispatchItem.emailAddress = event.target.value;
		}else{
			$("label[name='forgotValidation']").css({"opacity":"1", "transform": "translateX(0px)"});
			dispatchItem.type = "notValid";
			dispatchItem.emailAddress = event.target.value;
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
	
	
	render(){
		return(
			<div className={"textLeft"}>
				<label name="forgotValidation">Please enter your email</label>
				<input type="text" name="forgotPassword" value={this.state.forgotPassword} onChange={this.emailChange} onClick={this.clearemail}j onFocus={this.clearemail} onBlur={this.revertemail} onKeyUp={this.valid} />
			</div>
		)
	}	
}
const mapStateToProps = (state) => {return {state:state}};
const mapDispatchToProps = (dispatch) => {return {valid: () => {dispatch(dispatchItem)}}};
export default connect(mapStateToProps, mapDispatchToProps)(Email);