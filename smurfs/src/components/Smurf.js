import React from 'react';

const Smurf = (props) => {
	console.log(props.smurf)

	return (

		<div className="smurf-card">

			<h3> {props.smurf.name} </h3>
			<h4> Age: <span>{props.smurf.age}</span></h4>
			<h4> Height: <span>{props.smurf.height}</span></h4>
 
		</div>
	)
}

export default Smurf;