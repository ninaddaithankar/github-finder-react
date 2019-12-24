import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	render() {
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
		} = this.props.user;

		if (this.props.loading) return <Spinner />;

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
						<h1>
							<b>{name}</b>
						</h1>
						<a href={html_url} className='btn btn-dark'>
							Visit Github Profile
						</a>
					</div>
					<div>
						<ul className='card'>
							<li>
								<Fragment>
									<h3>
										Hireable :{' '}
										{hireable ? (
											<i className='fas fa-check text-success' />
										) : (
											<i className='fas fa-times-circle text-danger' />
										)}
									</h3>
									{company && (
										<Fragment>
											<h3 className='my-1'>Company : {company}</h3>
										</Fragment>
									)}
									{location && (
										<Fragment>
											<h3>Location : {location}</h3>
										</Fragment>
									)}
								</Fragment>
							</li>
						</ul>
						{bio && (
							<Fragment>
								<h3 className='card'>
									Bio : <p /> {bio}
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
			</Fragment>
		);
	}
}

export default User;
