import React, { useEffect, Fragment, useContext } from 'react';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);
	useEffect(() => {
		githubContext.getUser(match.params.login);
		githubContext.getUserRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		company,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = githubContext.user;

	if (githubContext.loading) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-light'>
				Back
			</Link>
			<div className='card grid-2'>
				<div className='text-center'>
					<img
						src={avatar_url}
						alt=''
						className='round-img'
						style={{ width: '15rem' }}
					/>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href={html_url}
						className='title-font'
					>
						<h1>{name}</h1>
					</a>
					<h3 style={{ fontWeight: 'normal' }}>
						Hireable :{' '}
						{hireable ? (
							<i className='fas fa-check text-success' />
						) : (
							<i className='fas fa-times-circle text-danger' />
						)}
					</h3>
				</div>
				<div>
					<ul className='card'>
						<li>
							<Fragment>
								{login && (
									<Fragment>
										<h3>
											Username :{' '}
											<span style={{ fontWeight: 'normal' }}>{login}</span>
										</h3>
									</Fragment>
								)}
								{company && (
									<Fragment>
										<h3>
											Company :{' '}
											<span style={{ fontWeight: 'normal' }}>{company}</span>
										</h3>
									</Fragment>
								)}
								{location && (
									<Fragment>
										<h3>
											Location :{' '}
											<span style={{ fontWeight: 'normal' }}>{location}</span>
										</h3>
									</Fragment>
								)}
								{blog && (
									<Fragment>
										<h3>
											Blog :{' '}
											<span style={{ fontWeight: 'normal' }}>{blog}</span>
										</h3>
									</Fragment>
								)}
							</Fragment>
						</li>
					</ul>
					{bio && (
						<Fragment>
							<h3 className='card'>
								Bio : <p /> <span style={{ fontWeight: 'normal' }}>{bio}</span>
							</h3>
						</Fragment>
					)}
				</div>
			</div>
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers : {followers}</div>
				<div className='badge badge-success'>Following : {following}</div>
				<div className='badge badge-light'>Public Repos : {public_repos}</div>
				<div className='badge badge-dark'>Public Gists : {public_gists}</div>
			</div>
			<Repos repos={githubContext.repos} />
		</Fragment>
	);
};

export default User;
