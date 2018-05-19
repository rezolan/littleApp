import React from 'react';
import PropTypes from 'prop-types';

const SortingButtons = (props) => (
	<div className="sorting">
		<button onClick = {props.ascendingOrder}>Ascending sorting by name</button>
		<button onClick = {props.descendingOrder}>Descending sorting by name</button>
		<button onClick = {props.initialOrder}>Remove sorting</button>
	</div>
);

SortingButtons.propTypes = {
	ascendingOrder: PropTypes.func.isRequired,
	descendingOrder: PropTypes.func.isRequired,
	initialOrder: PropTypes.func.isRequired
};

export default SortingButtons;