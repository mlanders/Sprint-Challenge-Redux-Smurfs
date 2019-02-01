import React from 'react';
import Smurf from './Smurf';
const uuidv4 = require('uuid/v4');

function Smurfs(props) {
	return props.smurfs.map(smurf => {
		return (
			<Smurf
				key={uuidv4()}
				smurf={smurf}
				handleDelete={props.handleDelete}
				handleEdit={props.handleEdit}
			/>
		);
	});
}

export default Smurfs;
