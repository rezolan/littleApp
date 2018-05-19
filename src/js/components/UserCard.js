import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../sass/components/user_card.scss';

class UserCard extends Component {
	render(){
		return (
			<article className = 'user-card'>
				<h3>
					<Link to = {`/user-${this.props.userInfo.id}`}>{ `${this.props.userInfo.first_name} ${this.props.userInfo.last_name}` }</Link>
				</h3>
				<h4>{ this.props.userInfo.company }</h4>
				<img
					src={ this.props.userInfo.avatar }
					alt={ `${this.props.userInfo.first_name} ${this.props.userInfo.last_name}` }/>
				<address>
					<span>{ this.props.userInfo.adress }</span>
					<span>{ this.props.userInfo.phone }</span>
					<span>{ this.props.userInfo.email }</span>
				</address>
			</article>
		)
	}
}
UserCard.propTypes = {
	userInfo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		first_name: PropTypes.string.isRequired,
		last_name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		company: PropTypes.string.isRequired,
		adress: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired
	}).isRequired
};

export default UserCard;