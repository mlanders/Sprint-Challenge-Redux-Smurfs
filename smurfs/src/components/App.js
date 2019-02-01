import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf, updateSmurf, editSmurf } from '../actions';
import Smurfs from './Smurfs';
import Form from './Form';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: '',
			height: '',
			id: '',
		};
	}

	componentDidMount() {
		this.props.getSmurfs();
	}

	handleDelete = (e, id) => {
		e.preventDefault();
		this.props.deleteSmurf(id);
	};
	handleEdit = (e, id) => {
		e.preventDefault();
		let selected = this.props.smurfs.find(smurf => smurf.id === id);
		this.props.editSmurf(selected);
		// this.setState({
		// 	name: selected.name,
		// 	age: selected.age,
		// 	height: selected.height,
		// });
	};
	handleUpdate = (e, id) => {
		e.preventDefault();
		this.props.deleteSmurf(id);
	};

	render() {
		return (
			<div className="App">
				<Form />
				{this.props.smurfs === null ? (
					<p>loading</p>
				) : (
					<Smurfs
						smurfs={this.props.smurfs}
						handleDelete={this.handleDelete}
						handleEdit={this.handleEdit}
					/>
				)}
			</div>
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
	{ getSmurfs, deleteSmurf, updateSmurf, editSmurf }
)(App);
