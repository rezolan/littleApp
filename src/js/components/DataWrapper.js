import React, { Component } from 'react';

import '../../sass/components/data_wrapper.scss';
import Spinner from './Spinner';
import MainPage from './MainPage';
import UserDetail from './UserDetail';

import { loadData } from "../actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from "axios";
import PropTypes from "prop-types";

const mapStateToProps = state => ({ employees: state.employees });
const mapDispatchToProps = dispatch => (bindActionCreators({ loadData }, dispatch));

@connect(mapStateToProps, mapDispatchToProps)
class DataWrapper extends Component{
	state = {
		countItems: this.props.employees.length,
		dataLoad: true,
	}
	componentDidMount() {
		if(this.state.countItems === 0) {
			this.setState({dataLoad: false});
			axios.get('http://localhost:3000/employees')
				.then(result => {
					return result.data;
				})
				.then(data => {
					this.props.loadData(data);
					this.setState({dataLoad: true, countItems: data.length});
				})
				.catch(error => {
					console.log(error);
					this.props.history.push("/wrong");
				})
		}
	}
	render() {
		return(
			<div className="data-wrapper">
				{!this.state.dataLoad ?
					<Spinner dataLoad={this.state.dataLoad}/> : null}
				{this.props.match.params.id === undefined ?
					<MainPage
						employees = {this.props.employees}
						countItems = {this.state.countItems}
						dataLoad = {this.state.dataLoad}/> :
					<UserDetail
						employees = {this.props.employees}
						countItems = {this.state.countItems}
						dataLoad = {this.state.dataLoad}
						paramsId = {+this.props.match.params.id}/>}
			</div>)
	}
}
DataWrapper.propTypes = {
	employees: PropTypes.array,
	loadData: PropTypes.func
};

export default DataWrapper;
