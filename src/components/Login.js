import React, { useState } from 'react';
import {
	Avatar,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import CustomButton from '../shared/CustomButton';
import axios from 'axios';

const Login = () => {
	const paperStyle = {
		padding: 20,
		height: '70vh',
		width: 280,
		margin: '20px auto',
	};

	const avatarStyle = {
		backgroundColor: '#77b4f1',
	};

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [fullName, setFullName] = useState();

	const handlePostRequest = (e) => {
		e.preventDefault();
		const postData = {
			userName,
			password,
		};

		axios
			.post(`http://localhost:8081/user-login`, postData)
			.then((response) => {
				console.log(response);
			});
		setFullName(userName);
		console.log(userName);
		console.log(password);
	};

	const inputEvent = (e) => {
		// console.log(e.target.value);
		setUserName(e.target.value);
	};
	const inputEventTwo = (e) => {
		// console.log(e.target.value);
		setPassword(e.target.value);
	};

	return (
		<Grid>
			<Paper elevation="10" style={paperStyle}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<LockOutlined />
					</Avatar>
					<h2>Sign In {fullName}</h2>
				</Grid>
				<form onSubmit={handlePostRequest}>
					<TextField
						label="Username"
						placeholder="Enter Username"
						required
						fullWidth
						onChange={inputEvent}
						value={userName}
					/>
					<TextField
						label="Password"
						placeholder="Enter password"
						type={'password'}
						required
						fullWidth
						onChange={inputEventTwo}
						value={password}
					/>

					<FormControlLabel
						control={<Checkbox name="checkedB" color="primary" />}
						label="Remember Me"
					/>

					<CustomButton value={'Sign In'} type="submit" />
				</form>
				<Typography>
					<Link href="#">Forgot Password?</Link>
				</Typography>
				<Typography>
					Do Not Have an Account Yet?
					<Link href="#">Sign Up</Link>
				</Typography>
			</Paper>
		</Grid>
	);
};

export default Login;
