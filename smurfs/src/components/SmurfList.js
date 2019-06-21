import React from 'react';
import Smurf from "../components/Smurf"
import "../styles/SmurfList.css"

const SmurfList = (props) => {
	// console.log(props)

	return (

		<div> 
			<h2> Smurf Village </h2> 

			<div className="smurf-list">

				{props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}

			</div>
		</div>
	)
}

export default SmurfList;