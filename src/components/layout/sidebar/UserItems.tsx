import { Box } from "@mui/material";
import { FC } from "react";
import ProfilePhoto from "../../../img/profile_photo.png";

export const UserItems: FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
			}}>
			<Box sx={{ position: "relative", marginRight: 5 }}>
				<img
					width={"30px"}
					src={ProfilePhoto}
					alt="avatar"
				/>
				<Box
					sx={{
						backgroundColor: "green",
						width: 4,
						height: 4,
						position: "absolute",
						bottom: 2,
						left: 2,
					}}
				/>
			</Box>
			<span>Nazarii Dzhaman</span>
		</Box>
	);
};
