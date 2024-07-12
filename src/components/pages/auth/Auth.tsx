import { Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";

interface IUserData {
	email: string;
	password: string;
}

export const Auth: FC = () => {
	const [isRegForm, setIsRegForm] = useState(false);
	const [userData, setUserData] = useState<IUserData>({
		email: '',
		password: ''
	} as IUserData);
	const handleLogin = (evt: SyntheticEvent<HTMLFormElement>) => {
		evt.preventDefault();
		if(isRegForm) {
			console.log('register');
		}else {
			console.log('auth')
		}
		console.log(userData.email, userData.password);
		setUserData({
			email: '',
			password: ''
		})
	};

	return (
		<Grid display='flex' justifyContent='center' alignItems='center'>
			<form onSubmit={handleLogin} style={{width: '60%'}}>
			<TextField
				type="email"
				label="Email"
				variant="outlined"
				value={userData.email}
				onChange={(evt) =>
					setUserData({ ...userData, email: evt.target.value })
				}
				required
				sx={{display: 'block', marginBottom: 3}}
			/>
			<TextField
				type="password"
				label="Password"
				variant="outlined"
				value={userData.password}
				onChange={(evt) =>
					setUserData({ ...userData, password: evt.target.value })
				}
				required
				sx={{display: 'block', marginBottom: 3}}
			/>
			<ButtonGroup variant='outlined'>
				<Button type="submit" onClick={()=>setIsRegForm(false)}>Auth</Button>
				<Button type="submit" onClick={()=>setIsRegForm(true)}>Register</Button>
			</ButtonGroup>
		</form>
		</Grid>
	);
};
