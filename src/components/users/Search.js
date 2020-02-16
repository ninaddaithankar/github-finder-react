import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const showClear = githubContext.users.length > 0 ? true : false;
	const [text, setText] = useState('');

	const onChange = e => {
		setText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Username should not be null', 'danger');
		} else {
			githubContext.searchUsers(text);
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
						onClick={githubContext.clearUsers}
					/>
				)}
			</form>
		</div>
	);
};

export default Search;
