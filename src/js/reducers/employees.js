import * as types from '../constants/ActionTypes';

export default function employees(state = [], action) {
	let { type, payload } = action;
	switch (type) {
		case types.LOAD_DATA:
			return payload;
		default:
			return state;
	}
}