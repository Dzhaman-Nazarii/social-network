import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile
} from "firebase/auth";
import { useAuth } from "../../providers/useAuth";

interface IUserData {
	name: string;
	email: string;
	password: string;
}

export const Auth: FC = () => {
	const { auth } = useAuth();

	const [isRegForm, setIsRegForm] = useState(false);
	const [userData, setUserData] = useState<IUserData>({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState<string | null>(null);

	const handleLogin = async (evt: SyntheticEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setError(null);

		if (isRegForm) {
			try {
				const res = await createUserWithEmailAndPassword(
					auth,
					userData.email,
					userData.password
				);
				await updateProfile(res.user, {
					displayName: userData.name
				})
				console.log("User registered successfully");
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("An unknown error occurred");
				}
			}
		} else {
			try {
				await signInWithEmailAndPassword(
					auth,
					userData.email,
					userData.password
				);
				console.log("User login successfully");
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("An unknown error occurred");
				}
			}
		}
		console.log(userData.email, userData.password);
		setUserData({
			name: "",
			email: "",
			password: ""
		});
	};

	return (
		<>
			{error && (
				<Alert
					severity="error"
					style={{ marginBottom: 20 }}>
					{error}
				</Alert>
			)}
			<Grid
				display="flex"
				justifyContent="center"
				alignItems="center">
				<form
					onSubmit={handleLogin}
					style={{ width: "30%" }}>
					<TextField
						label="Name"
						variant="outlined"
						value={userData.name}
						onChange={(evt) =>
							setUserData({
								...userData,
								name: evt.target.value,
							})
						}
						sx={{ display: "block", marginBottom: 3 }}
					/>
					<TextField
						type="email"
						label="Email"
						variant="outlined"
						value={userData.email}
						onChange={(evt) =>
							setUserData({
								...userData,
								email: evt.target.value,
							})
						}
						required
						sx={{ display: "block", marginBottom: 3 }}
					/>
					<TextField
						type="password"
						label="Password"
						variant="outlined"
						value={userData.password}
						onChange={(evt) =>
							setUserData({
								...userData,
								password: evt.target.value,
							})
						}
						required
						sx={{ display: "block", marginBottom: 3 }}
					/>
					<ButtonGroup variant="outlined">
						<Button
							style={{ width: "105px" }}
							type="submit"
							onClick={() => setIsRegForm(false)}>
							Auth
						</Button>
						<Button
							style={{ width: "105px" }}
							type="submit"
							onClick={() => setIsRegForm(true)}>
							Register
						</Button>
					</ButtonGroup>
				</form>
			</Grid>
		</>
	);
};
