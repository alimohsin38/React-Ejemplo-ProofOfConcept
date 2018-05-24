import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';
import NavigationStrip from './navigationstrip';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import BootstrapSlider from './bootstrapslider';
import {userNameAndPassword} from './logincomponent';


class Home extends Component{
	constructor(props){
		super(props);
		this.state = {search: "Search...", serchOpened: true, logOut: "Logout"};
		this.openSearchBox = this.openSearchBox.bind(this);
		this.search = this.search.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
		this.revertsearch = this.revertsearch.bind(this);
		this.loggedOut = this.loggedOut.bind(this);
	}
	
	
	openSearchBox(event){		
		this.setState(prevState => ({serchOpened: !prevState.serchOpened}));		
		if(this.state.serchOpened){
			$("input[name='search']").css({"opacity":"1", "width":"200px", "transition": "all 0.5s 0.0s"});
			$("i[name='searchIcon']").css({"color":"#000"});
		}else{
			$("input[name='search']").css({"opacity":"0", "width":"0px", "transition": "all 0.5s 0.0s"});
			$("i[name='searchIcon']").css({"color":"#888"});
			this.setState({search: 'Search...'});
		}
	}
	
	
	search(event){
		this.setState({search: event.target.value});
	}
	clearSearch(){
		if(this.state.search == 'Search...'){
			this.setState({search: ''});
			$("input[name='search']").css({"color":"#000"});
		}
	}
	revertsearch(){
		if(this.state.search == ''){
			this.setState({search: 'Search...'});
			$("input[name='search']").css({"color":"#888"});
		}
	}
	
	
	loggedOut(){
		this.setState({logOut: "Wait..."});
		setTimeout(()=> window.location.reload(), 1000);		
	}
	
	
	render(){
		const MenuItems = ["home", "pages", "elements", "classes", "trainers", "about", "blog"];
		return(
			<div className={"wrapper"}>
				<div className={"container-fluid bgWhite"}>
					<div className={"row"}>
						<div className={"container noPadding"}>
							<div className={"col displayFlex noPadding"}>
								<div className={"col-3 noPadding logo"}>
									<div className={"logoContainer"}>
										<Link to={"./home"}>GYM</Link>
									</div>
								</div>
								
								<div className={"col-6 noPadding nav"}>
									<NavigationStrip value={MenuItems} />
								</div>
								
								<div className={"col-3 noPadding"}>
									<div className={"searchBox"}>
										<i name={"searchIcon"} onClick={this.openSearchBox} className={"fa fa-search"}></i>
										<input tabIndex={"1"} onFocus={this.clearSearch} onBlur={this.revertsearch} onClick={this.clearSearch} onChange={this.search} type="text" name={"search"} value={this.state.search} />
										<font>|</font>
									</div>
									
									<Link to="profile"><label name="userNameHome">Hi, {userNameAndPassword.defaultUser}</label></Link>
									
									<div className={"logOut"}>
										<Link to="/" onClick={this.loggedOut}>{this.state.logOut}</Link>
									</div>
								</div>							
							</div>
						</div>
					</div>
				</div>
				
				
				<div className={"container-fluid bgWhite"}>
					<div className={"row"}>
						<div className={"con tainer noPadding"}>
							<div className={"col displayFlex noPadding"}>
								<BootstrapSlider />
							</div>
						</div>
					</div>
				</div>
				
				
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
			</div>
		)
	}
}
export default Home;