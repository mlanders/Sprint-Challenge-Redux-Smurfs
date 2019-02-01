import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: '',
			height: '',
			id: '',
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleAdd = e => {
		e.preventDefault();
		let smurf = {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height,
			id: '',
		};
		this.props.addSmurf(smurf);
	};

	render() {
		return (
			<form>
				<input
					onChange={e => this.handleChange(e)}
					name="name"
					value={this.state.name}
					placeholder="Name"
				/>
				<input
					onChange={e => this.handleChange(e)}
					name="age"
					value={this.state.age}
					placeholder="Age"
				/>
				<input
					onChange={e => this.handleChange(e)}
					name="height"
					value={this.state.height}
					placeholder="Height"
				/>
				<button onClick={e => this.handleAdd(e)}>Submit</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
	};
};

export default connect(
	mapStateToProps,
	{ addSmurf }
)(Form);
