import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {$, popper, bootstrap} from './App';
import { connect } from 'react-redux';
import {store} from './logincomponent';
import BootstrapSlider from './bootstrapslider';
import Aerobics from './aerobicscomponent';
import Swimming from './swimmingcomponent';
import Yoga from './yogacomponent';
import KickBoxing from './kickboxingcomponent';
import Payment from './paymentcomponent';


class Container extends Component{
	constructor(props){
		super(props);
		this.state = {value: ""};		
	}
	
	
	render(){	
		if(this.props.state == 3){
			return (<Aerobics />)
			
		}else if(this.props.state == 4){
			return (<Swimming />)
			
		}else if(this.props.state == 5){
			return (<Yoga />)
			
		}else if(this.props.state == 6){
			return (<KickBoxing />)
			
		}else if(this.props.state == 8){
			return (<Payment />)
			
		}else{	
			return(										
				<div className={"container-fluid bgWhite"}>
					<div className={"row"}>
						<div id={"BootstrapSlider"} className={"con tainer noPadding"} style={{"margin":"0px auto"}}>
							<div className={"col displayFlex noPadding sliderContainerResponsive"}>
								<BootstrapSlider />
							</div>
						</div>
					</div>
				</div>
			)
		}		
	}
}
const mapStateToProps = (state) => {return {state:state}}
export default connect(mapStateToProps)(Container);