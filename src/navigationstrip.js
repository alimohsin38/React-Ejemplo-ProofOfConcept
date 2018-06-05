import React, { Component } from 'react';
import {$, popper, bootstrap} from './App';
import SubmenuItems from './submenus';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import {store} from './logincomponent';
import { connect } from 'react-redux';


const subMenu = [];
class NavigationStrip extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};
		this.handleClick = this.handleClick.bind(this);
		this.mouseOver = this.mouseOver.bind(this);
	}
	
	
	componentDidMount() {
		$("#menuStrip>li:first-child>a").addClass("active");
	}
	

	componentWillUnmount() {
		
	}
	
	
	handleClick(event){
		const clickedVal = $((event.target)).text();
		$("#menuStrip li a").removeClass("active");
		$($(event.target).parent().children()[0]).addClass("active");		
		if(clickedVal == "home"){
			store.dispatch({type: clickedVal});			
		}	
	}
	
	
	mouseOver(event){
		const dataTarget = $(event.target).parent()[0].getAttribute("data-target");		
		subMenu.length = 0;
		try{
			if(dataTarget.indexOf("home") > -1){
				subMenu.length = 0;
				this.setState({value: "home"});
				
			}else if(dataTarget.indexOf("pages") > -1){
				subMenu.push("Menu Item 1", "Menu Item 2", "Menu Item 3", "Menu Item 4", "Menu Item 5");
				this.setState({value: "pages"});
				
			}else if(dataTarget.indexOf("elements") > -1){
				subMenu.push("elements Item 1", "elements Item 2", "elements Item 3");
				this.setState({value: "elements"});
				
			}else if(dataTarget.indexOf("classes") > -1){
				subMenu.push("aerobics", "swimming", "yoga package", "kick boxing");
				this.setState({value: "classes"});
				
			}else if(dataTarget.indexOf("trainers") > -1){
				subMenu.push("trainers Item 1", "trainers Item 2", "trainers Item 3", "trainers Item 4");
				this.setState({value: "trainers"});
				
			}else if(dataTarget.indexOf("about") > -1){
				subMenu.push("about Items 1", "about Items 2", "about Items 3");
				this.setState({value: "about"});
				
			}else if(dataTarget.indexOf("blog") > -1){
				subMenu.length = 0;
				this.setState({value: "blog"});
				
			}else{		
				subMenu.length = 0;
				this.setState({value: ""});
			}
		}catch(ex){
			return ex;
		}	
	}


	render(){
		const items = this.props.value;
		return(
			<ul id={"menuStrip"}>
				{items.map(
					(items, index) => {return (<li data-target={items} key={index.toString()} onClick={this.handleClick} onMouseOver={this.mouseOver}>
						<Link to={items}>{items}</Link>						
						<SubmenuItems value={subMenu} />
					</li>)}
				)}
			</ul>
		)
	}
}
export default NavigationStrip;