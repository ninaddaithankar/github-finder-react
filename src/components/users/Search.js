import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showAlert, showClear, clearUsers }) => {
	const [text, setText] = useState('');

	const onChange = e => {
		setText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			showAlert('Username should not be null', 'danger');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className='form grid-5'>
				<input
					type='text'
					name='text'
					placeholder='Enter Github username'
					value={text}
					onChange={onChange}
					style={{
						gridColumnStart: '1',
						gridColumnEnd: showClear ? 4 : 5
					}}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
				{showClear && (
					<input
						type='button'
						value='Clear'
						className='btn btn-light btn-block'
						onClick={clearUsers}
					/>
				)}
			</form>
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	showAlert: PropTypes.func.isRequired
};

export default Search;
