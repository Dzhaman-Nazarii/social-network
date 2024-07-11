import {
	Avatar,
	Box,
	Card,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { FC } from "react";
import NazariiDzhamanPhoto from "../../../img/Nazarii_Dzhaman.jpg";
import BrendanEichPhoto from "../../../img/Brendan_Eich.jpg";
import BillGatesPhoto from "../../../img/Bill_Gates.jpg";
import SolomonHykesPhoto from '../../../img/Solomon_Hykes.jpg'
import { Link, useNavigate } from "react-router-dom";

const users = [
	{
		id: 45366,
		avatar: NazariiDzhamanPhoto,
		name: "Nazarii Dzhaman",
		isOnline: true,
	},
	{
		id: 84740,
		avatar: BrendanEichPhoto,
		name: "Brendan Eich",
		isOnline: false,
	},
	{
		id: 49647,
		avatar: BillGatesPhoto,
		name: "Bill Gates",
		isOnline: true,
	},
	{
		id: 94638,
		avatar: SolomonHykesPhoto,
		name: "Solomon Hykes",
		isOnline: false,
	},
];

export const UserItems: FC = () => {
	const navigate = useNavigate();
	return (
		<Card
			variant="outlined"
			sx={{
				padding: 2,
				border: "none",
				borderRadius: 3,
				backgroundColor: "#F1F7FA",
			}}>
			{users.map((user) => (
				<Link
				key={user.id}
					to={`/profile/${user.id}`}
					style={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						color: "#111",
						marginBottom: 12,
					}}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}>
						<Box
							sx={{
								position: "relative",
								marginRight: 2,
								width: 50,
								height: 50,
							}}>
							<Avatar
								sx={{
									width: 46,
									height: 46,
									borderRadius: "50%",
								}}
								src={user.avatar}
								alt="avatar"
							/>
								<Box
									sx={{
										backgroundColor: user.isOnline ? "#4FB14F" : '#D22D2D',
										border: "2px solid #F1F7FA",
										width: 10,
										height: 10,
										position: "absolute",
										bottom: 1,
										right: 1,
										borderRadius: "50%",
									}}
								/>
						</Box>
						<span style={{ fontSize: 14 }}>{user.name}</span>
					</Box>
				</Link>
			))}
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/messages")}>
						<ListItemIcon>
							<QuestionAnswer />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItemButton>
				</ListItem>
			</List>
		</Card>
	);
};
