import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

import '../../sass/components/main.scss';
import UserCard from './UserCard';
import Pagination from './Pagination';
import SortingButtons from './SortingButtons';
import Spinner from './Spinner';

import { loadData } from "../actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({employees: state.employees});
const mapDispatchToProps = dispatch => (bindActionCreators({ loadData }, dispatch));

@connect(mapStateToProps, mapDispatchToProps)
class MainPage extends Component {
	state = {
		dataLoad: true,
		activeNumber: 1,
		countOnPage: 10,
		countItems: this.props.employees.length,
		sortDirection: 0
	};
	changePage(activeNumber) {
		this.setState({ activeNumber } )
	}
	ascendingOrder() {
		this.setState({sortDirection: 1})
	}
	descendingOrder() {
		this.setState({sortDirection: -1})
	}
	initialOrder() {
		this.setState({sortDirection: 0})
	}
	componentDidMount() {
		if(this.state.countItems === 0){
			this.setState({dataLoad: false});
			axios.get('http://localhost:3000/employees')
				.then(result => {
					return result.data;
				})
				.then(data => {
					console.log(data);
					this.props.loadData(data);
					this.setState({dataLoad: true, countItems: data.length});
				})
				.catch(error => {
					this.setState({dataLoad: true});
					console.log(error);
				})
		}
	}
	render() {
		return(
			<div className="main">
				{!this.state.dataLoad ? (
					<Spinner dataLoad={this.state.dataLoad}/>
					) :
					<SortingButtons
						ascendingOrder={::this.ascendingOrder}
						descendingOrder={::this.descendingOrder}
						initialOrder={::this.initialOrder}/>}

				<section className = "users">
					{!this.state.sortDirection ? (
						this.props.employees
							.slice((this.state.activeNumber - 1) * this.state.countOnPage, (this.state.activeNumber) * this.state.countOnPage)
							.map(item => <UserCard userInfo = { item } key = { item.id } />)
					) : (
						[...this.props.employees]
							.sort((a, b) => ((a.first_name > b.first_name) ? this.state.sortDirection : -this.state.sortDirection))
							.slice((this.state.activeNumber - 1) * this.state.countOnPage, (this.state.activeNumber) * this.state.countOnPage)
							.map(item => <UserCard userInfo = { item } key = { item.id } />)
					)}
				</section>

				{this.state.dataLoad ? (
					<Pagination
						countBtns = { Math.round(this.state.countItems / this.state.countOnPage) }
						changePage = { ::this.changePage }
						activeButton = { this.state.activeNumber }
						countBtnsOnPage = { 5 }/>) : null}
			</div>
		)
	}
}

MainPage.propTypes = {
	employees: PropTypes.array
};

export default MainPage;