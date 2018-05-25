import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";


class BootstrapSlider extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};
	}
	
	
	render(){
		return(
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{"width":"100%"}}>
                <ol className="carousel-indicators" style={{"left":"417px"}}>
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox" style={{"width":"142.9%"}}>
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src="../images/slider1.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="../images/slider2.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="../images/slider3.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{"right":"-400px"}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
		)
	}
}
export default BootstrapSlider;