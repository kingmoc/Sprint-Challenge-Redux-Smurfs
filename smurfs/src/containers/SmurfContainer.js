import React, { Component } from 'react';
import "../styles/SmurfContainer.css"

import { connect } from "react-redux";
import { getSmurfs } from "../actions"

import SmurfAddForm from '../components/SmurfAddForm'
import SmurfList from '../components/SmurfList'



class SmurfContainer extends Component {

	
	
	componentDidMount() {
		this.props.getSmurfs();
		// console.log(this.props.smurfs)
	}

	render() {
		console.log(this.props.smurfs)

		return (
			<div className="smurf-container">

				<SmurfAddForm />
				<SmurfList smurfs={this.props.smurfs}/>
				
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	// console.log(state.smurfs)
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		error: state.error
	}
	
}


export default connect(mapStateToProps, {getSmurfs})(SmurfContainer);