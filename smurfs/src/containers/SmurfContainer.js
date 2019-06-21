import React, { Component } from 'react';

import SmurfAddForm from '../components/SmurfAddForm'
import SmurfList from '../components/SmurfList'

import { connect } from "react-redux";

class SmurfContainer extends Component {



	render() {


		return (
			<div className="container">

				<SmurfAddForm />
				<SmurfList />
				
			</div>
		);
	}
}

export default SmurfContainer;