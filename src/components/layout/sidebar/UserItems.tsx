import { Avatar, Box, Card } from "@mui/material";
import { FC } from "react";
import ProfilePhoto from "../../../img/profile_photo.png";
import { Link } from "react-router-dom";

export const UserItems: FC = () => {
	return (
		<Card
			variant="outlined"
			sx={{
				padding: 2,
				border: "none",
				borderRadius: 3,
				backgroundColor: "#F1F7FA",
			}}>
			<Link
				to={"/profile"}
				style={{
					display: "flex",
					alignItems: "center",
					textDecoration: "none",
					color: "#111",
					marginBottom: 12
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
								width: 48,
								height: 48,
								borderRadius: '50%'
							}}
							src={ProfilePhoto}
							alt="avatar"
						/>
						<Box
							sx={{
								backgroundColor: "#4FB14F",
								border: '2px solid #F1F7FA',
								width: 10,
								height: 10,
								position: "absolute",
								bottom: 1,
								right: 1,
								borderRadius: '50%'
							}}
						/>
					</Box>
					<span style={{ fontSize: 14 }}>Nazarii Dzhaman</span>
				</Box>
			</Link>
		</Card>
	);
};
