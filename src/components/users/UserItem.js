import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center bg-light'>
			<img
				src={avatar_url}
				className='round-img'
				alt=''
				style={{ width: '6rem', marginTop: '1rem' }}
			/>
			<h3>{login}</h3>
			<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
				More
			</Link>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
