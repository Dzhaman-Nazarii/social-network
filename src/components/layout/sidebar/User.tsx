import { Avatar, Button, Card, Chip } from "@mui/material";
import { FC } from "react";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";

export const User: FC = () => {
	const { user, auth } = useAuth();
	return (
		<Card
		variant='outlined'
			sx={{
				backgroundColor: "#F1F7FA",
				padding: 1,
				marginBottom: 2,
				display: 'flex',
				borderRadius: 3,
				border: 'none',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			<Chip
				avatar={<Avatar alt="avatar" src={user?.avatar} />}
				label={user?.name || 'No name'}
				variant='outlined'
				sx={{backgroundColor: '#fff'}}
			/>
			<Button onClick={() => signOut(auth)}>{auth.currentUser ? 'Logout' : "Login"}</Button>
		</Card>
	);
};
