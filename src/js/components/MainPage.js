import React, { Component } from 'react';
import PropTypes from "prop-types";

import '../../sass/components/main.scss';
import UserCard from './UserCard';
import Pagination from './Pagination';
import SortingButtons from './SortingButtons';

class MainPage extends Component {
	state = {
		activeNumber: 1,
		countOnPage: 10,
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

	render() {
		return(
			<div className="main">
				{this.props.dataLoad ? (
					<SortingButtons
						ascendingOrder={::this.ascendingOrder}
						descendingOrder={::this.descendingOrder}
						initialOrder={::this.initialOrder}/>
					) : null}

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

				{this.props.dataLoad ? (
					<Pagination
						countBtns = { Math.round(this.props.countItems / this.state.countOnPage) }
						changePage = { ::this.changePage }
						activeButton = { this.state.activeNumber }
						countBtnsOnPage = { 5 }/>) : null}
			</div>
		)
	}
}

MainPage.propTypes = {
	employees: PropTypes.array.isRequired,
	dataLoad: PropTypes.bool.isRequired,
	countItems: PropTypes.number.isRequired
};

export default MainPage;