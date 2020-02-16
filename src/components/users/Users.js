import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	if (githubContext.loading) {
		return <Spinner />;
	} else {
		return (
			<div className='grid-4'>
				{githubContext.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

export default Users;
