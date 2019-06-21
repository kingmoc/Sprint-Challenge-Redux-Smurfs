import React from 'react';
import Smurf from "../components/Smurf"

const SmurfList = (props) => {
	// console.log(props)

	return (

		<div className="smurf-list">

			{props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}

		</div>
	)
}

export default SmurfList;