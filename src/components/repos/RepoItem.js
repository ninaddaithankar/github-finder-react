import React from 'react';

const RepoItem = ({ repo }) => {
	return (
		<div className='card bg-light'>
			<a href={repo.html_url}>
				<h3>{repo.name}</h3>
			</a>

			{repo.description}
		</div>
	);
};

export default RepoItem;
