import { FC } from "react";
import { UserItems } from "./UserItems";
import { Menu } from "./Menu";

export const Sidebar: FC = () => {
	return (
		<>
			<UserItems/>
			<Menu/>
		</>
	);
};
