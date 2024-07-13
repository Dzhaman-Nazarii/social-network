import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface ICard {
	children: ReactNode
}

export const Card: FC<ICard> = ({children}) => {
	return (
		<Box
			sx={{
				border: "1px solid #ccc",
				borderRadius: "10px",
				padding: 2,
				marginTop: 3,
			}}>{children}</Box>
	);
};
