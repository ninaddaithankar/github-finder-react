import React from 'react';
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
			<a href={html_url} className='btn btn-dark btn-sm my-1' style={{}}>
				More
			</a>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
