import employeesState from '../store/state/employees';
import * as types from '../constants/ActionTypes';

export default function employees(state = [], action){
	let {type, payload} = action;
	switch (type){
		case types.LOAD_DATA:
			return payload;
			break;
		default:
			return state;
	}
}