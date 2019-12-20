import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		showAlert: PropTypes.func.isRequired
	};

	state = {
		text: ''
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.showAlert('Username should not be null', 'danger');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({
				text: ''
			});
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form grid-5'>
					<input
						type='text'
						name='text'
						placeholder='Enter github username'
						value={this.state.text}
						onChange={this.onChange}
						style={{
							gridColumnStart: '1',
							gridColumnEnd: this.props.showClear ? 4 : 5
						}}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
					{this.props.showClear && (
						<input
							type='button'
							value='Clear'
							className='btn btn-light btn-block'
							onClick={this.props.clearUsers}
						/>
					)}
				</form>
			</div>
		);
	}
}

export default Search;
