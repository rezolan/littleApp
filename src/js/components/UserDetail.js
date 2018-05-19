import React, { Component } from 'react';
import PropTypes from "prop-types";

import { loadData } from "../actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from "axios/index";

const mapStateToProps = state => ({employees: state.employees});
const mapDispatchToProps = dispatch => (bindActionCreators({ loadData }, dispatch));

@connect(mapStateToProps, mapDispatchToProps)
class UserDetail extends Component{
	constructor(props){
		super(props);
		this.state = {
			userInfo: this.props.employees.filter(activeUser => activeUser.id ===  +this.props.match.params.id)[0]
		};
	}
	componentDidMount() {
		if(this.state.userInfo === undefined){
			this.setState({dataLoad: false});
			axios.get('http://localhost:3000/employees')
				.then(result => {
					return result.data;
				})
				.then(data => {
					this.props.loadData(data);
					let userInfo = this.props.employees.filter(activeUser => activeUser.id ===  +this.props.match.params.id)[0];
					this.setState({ userInfo: {...userInfo} })
				})
				.catch(error => {
					console.log(error);
				})
		} else{
			let userInfo = this.props.employees.filter(activeUser => activeUser.id ===  +this.props.match.params.id)[0];
			this.setState({ userInfo: {...userInfo} })
		}
	}
	render(){
		return (
			<article className = 'user-detail'>
				{this.state.userInfo !== undefined ? (
					<div>
						<h1>{ `${this.state.userInfo.first_name} ${this.state.userInfo.last_name}` }</h1>
						<h2>{ this.state.userInfo.company }</h2>
						<img
							src={ this.state.userInfo.avatar }
							alt={ `${this.state.userInfo.first_name} ${this.state.userInfo.last_name}` }/>
						<address>
							<span>{ this.state.userInfo.adress }</span>
							<span>{ this.state.userInfo.phone }</span>
							<span>{ this.state.userInfo.email }</span>
						</address>
					</div>
				) : null}

			</article>
		)
	}
}

UserDetail.propTypes = {
	employees: PropTypes.array
};

export default UserDetail;