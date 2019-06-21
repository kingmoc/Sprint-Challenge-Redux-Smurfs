import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurfAPI } from '../actions';

class SmurfAddForm extends Component {

	state = {
		newSmurf: {
			name: "",
			age: null,
			height: ""
		}
	}

	handleChanges = e => {
	
		this.setState({
			newSmurf: { ...this.state.newSmurf,
				[e.target.name]: e.target.value 	
			}			
		});
	}

	addSmurf = e => {
		e.preventDefault();
		this.props.addSmurfAPI(this.state.newSmurf)

		this.setState({
			newSmurf: {
				name: "",
				age: null,
				height: ""
			}		
		});		
	}


	render() {


		return (
			<div className="form">

				<h1 className="form-title"> Add Smurf </h1>

				<form method="post" className="form-info" onSubmit={this.addSmurf}>

					<div>
						<h3> Name: </h3>
						<input 
						type="text" 
						value={this.state.newSmurf.name}
						name="name"
						onChange={this.handleChanges}
						/>
					</div>

					<div>
						<h3> Age: </h3>
						<input 
						type="number" 
						value={this.state.newSmurf.age}
						name="age"
						onChange={this.handleChanges}
						/>
					</div>

					<div>
						<h3> Height: </h3>
						<input 
						type="text" 
						value={this.state.newSmurf.height}
						name="height"
						onChange={this.handleChanges}
						/>
					</div>

					<button> Add Smurf! </button>

				</form>
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		addingSmurf: state.addingSmurf,
		error: state.error
	}
	
}

export default connect(mapStateToProps, {addSmurfAPI})(SmurfAddForm);