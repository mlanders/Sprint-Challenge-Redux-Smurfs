import React from 'react';

function Smurf(props) {
	return (
		<div className="smurf">
			<h1>{props.smurf.name}</h1>
			<p>Age: {props.smurf.age}</p> <p>Height: {props.smurf.height}</p>
			<button onClick={e => props.handleDelete(e, props.smurf.id)}>
				Delete
			</button>
			<button onClick={e => props.handleEdit(e, props.smurf.id)}>
				Edit
			</button>
		</div>
	);
}

export default Smurf;
