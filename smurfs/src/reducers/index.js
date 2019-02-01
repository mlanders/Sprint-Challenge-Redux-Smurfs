import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_FAILURE,
	ADD_SMURF_START,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_FAILURE,
	DELETE_SMURF_START,
	DELETE_SMURF_SUCCESS,
	DELETE_SMURF_FAILURE,
	EDIT_SMURF_START,
	EDIT_SMURF_SUCCESS,
	EDIT_SMURF_FAILURE,
	UPDATE_SMURF_START,
	UPDATE_SMURF_SUCCESS,
	UPDATE_SMURF_FAILURE,
} from '../actions/';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState = {
	smurfs: [],
	smurf: {
		name: '',
		age: '',
		height: '',
	},
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				smurfs: [...state.smurfs],
				fetchingSmurfs: true,
				error: '',
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				smurfs: action.payload.data,
				fetchingSmurfs: false,
				error: '',
			};
		case FETCH_SMURFS_FAILURE:
			return {
				...state,
				smurfs: [...state.smurfs],
				fetchingSmurfs: false,
				error: action.payload.data,
			};
		case ADD_SMURF_START:
			return {
				...state,
				smurfs: [...state.smurfs],
				addingSmurf: true,

				error: '',
			};
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload.data,
				addingSmurf: false,

				error: '',
			};
		case ADD_SMURF_FAILURE:
			return {
				...state,
				smurfs: [...state.smurfs],
				addingSmurf: false,

				error: action.payload.data,
			};
		case DELETE_SMURF_START:
			return {
				...state,
				smurfs: [...state.smurfs],
				deletingSmurf: true,

				error: '',
			};
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload.data,
				deletingSmurf: false,

				error: '',
			};
		case DELETE_SMURF_FAILURE:
			return {
				...state,
				smurfs: [...state.smurfs],
				deletingSmurf: false,

				error: action.payload.data,
			};
		case UPDATE_SMURF_START:
			return {
				...state,
				smurfs: [...state.smurfs],
				updatingSmurf: true,

				error: '',
			};
		case UPDATE_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload.data,
				updatingSmurf: false,

				error: '',
			};
		case UPDATE_SMURF_FAILURE:
			return {
				...state,
				smurfs: [...state.smurfs],
				updatingSmurf: false,

				error: action.payload.data,
			};
		case EDIT_SMURF_START:
			return {
				...state,
			};
		case EDIT_SMURF_SUCCESS:
			console.log(action.payload.data);

			return {
				...state,
				smurf: {
					name: action.payload.data[0].name,
					age: action.payload.data[0].age,
					height: action.payload.data[0].height,
				},
			};
		case EDIT_SMURF_FAILURE:
			return {
				...state,
				error: action.payload.data,
			};

		default:
			return state;
	}
};

export default reducer;
