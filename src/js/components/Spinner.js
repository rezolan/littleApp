import React from 'react';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';

const Spinner = (props) => (
	<div className="spinner">
		<ScaleLoader
			color={'#fb2d00'}
			loading={!props.dataLoad}/>
	</div>
);

Spinner.propTypes = {
	dataLoad: PropTypes.bool.isRequired
};
export default Spinner;