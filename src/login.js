import React, { Component } from 'react';
import {$, popper, bootstrap} from './App';
import Logincomponent, {store} from './logincomponent';
import Forgotpassword from './forgotpasswordcomponent';
import Home from './home';
import Signup from './signupcomponent';
import { connect } from 'react-redux';


class Login extends Component{
	constructor(props){
		super(props);
		this.state = {value: false};
	}
	
	
	render(){
		if(this.props.state == 1 || this.props.state.valid || this.props.state.valid == false){
			return (<Forgotpassword />)
			
		}else if(this.props.state == 0){
			return (<Logincomponent />)
			
		}else if(this.props.state == 2){
			return (<Signup />)	
			
		}else if(this.props.state == 3 || this.props.state == 4 || this.props.state == 5 || this.props.state == 6 || this.props.state == 7 || this.props.state == 8){
			return (<Home />)
			
		}
	}
}
const mapStateToProps = (state) => {return {state:state}}
export default connect(mapStateToProps)(Login);