import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../../sass/components/user-detail.scss';

class UserDetail extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {...this.props.employees.filter(activeUser => activeUser.id ===  this.props.paramsId)[0]}
		};
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.employees.length !== 0) {
			this.setState({userInfo: {...nextProps.employees.filter(activeUser => activeUser.id ===  nextProps.paramsId)[0]}});
		}
	}
	render() {
		return (
			<article className = 'user-detail'>
				{Object.keys(this.state.userInfo).length !== 0 ? (
					<div>
						<h1>{ `${this.state.userInfo.first_name} ${this.state.userInfo.last_name}` }</h1>
						<h2>{ this.state.userInfo.company }</h2>
						<img
							src={ this.state.userInfo.avatar }
							alt={ `${this.state.userInfo.first_name} ${this.state.userInfo.last_name}` }/>
						<address>
							<div>{ this.state.userInfo.adress }</div>
							<div>{ this.state.userInfo.phone }</div>
							<div>{ this.state.userInfo.email }</div>
						</address>
					</div>
				) : null}

			</article>
		)
	}
}

UserDetail.propTypes = {
	employees: PropTypes.array.isRequired,
	paramsId: PropTypes.number
};

export default UserDetail;