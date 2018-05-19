import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../sass/components/pagination.scss';

class Pagination extends Component{
	handlePage(i) {
		this.props.changePage(i);
	}
	renderBtns() {
		let buttons = [];
		const { activeButton, countBtnsOnPage, countBtns } = this.props;
		const countAsideBtns = Math.floor(countBtnsOnPage/2);
		let edge;
		let flag = false;
		if(activeButton - countAsideBtns <= 1 ) {
			flag = true;
			edge = countBtnsOnPage;
		}else if(activeButton + countAsideBtns >= countBtns) {
			buttons.push(<button onClick = {this.handlePage.bind(this, 1)} key = '0k'>{'<<'}</button>);
			edge = countBtns;
		}else{
			buttons.push(<button onClick = {this.handlePage.bind(this, 1)} key = '0k'>{'<<'}</button>);
			flag = true;
			edge = activeButton + countAsideBtns
		}
		for( let i = edge - countBtnsOnPage + 1; i <= edge; i++ ) {
			buttons.push(<button onClick = {this.handlePage.bind(this, i)} key = {`${i}`}>{i}</button>);
		}
		if(flag) {
			buttons.push(<button onClick = {this.handlePage.bind(this, countBtns)} key = {`${countBtns+1}k`}>{'>>'}</button>);
		}
		console.log(buttons);
		return buttons;
	}
	render() {
		return(
			<div className = 'pagination'>
				{this.renderBtns()}
			</div>
		)
	}
}

Pagination.propTypes = {
	countBtns: PropTypes.number.isRequired,
	changePage: PropTypes.func.isRequired,
	activeButton: PropTypes.number.isRequired,
	countBtnsOnPage: PropTypes.number.isRequired
};

export default Pagination;