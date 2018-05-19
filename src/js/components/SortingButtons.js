import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/components/sorting_buttons.scss';

const SortingButtons = (props) => (
	<div className="sorting-buttons">
		<div className="button-wrapper">
			<button onClick = {props.ascendingOrder}>Ascending sorting by name</button>
		</div>
		<div className="button-wrapper">
			<button onClick = {props.descendingOrder}>Descending sorting by name</button>
		</div>
		<div className="button-wrapper">
			<button onClick = {props.initialOrder}>Remove sorting</button>
		</div>
	</div>
);

SortingButtons.propTypes = {
	ascendingOrder: PropTypes.func.isRequired,
	descendingOrder: PropTypes.func.isRequired,
	initialOrder: PropTypes.func.isRequired
};

export default SortingButtons;