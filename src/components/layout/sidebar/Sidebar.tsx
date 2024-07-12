import { FC } from "react";
import { UserItems } from "./UserItems";
import { Menu } from "./Menu";
import { User } from "./User";

export const Sidebar: FC = () => {
	return (
		<>
			<User />
			<UserItems />
			<Menu />
		</>
	);
};
