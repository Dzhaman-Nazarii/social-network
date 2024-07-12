import { FC, useState } from "react";
import logoUkraine from "../../../img/logo_Ukraine.svg";
import { Search } from "@mui/icons-material";

import css from './Header.module.css';

export const Header: FC = () => {

	const [isSearchActive, setIsSearchActive] = useState(false);

	return (
		<header className={css.header}>
			<div className={css.imageWrapper}>
			<img
				src={logoUkraine}
				alt="logo"
			/>
			</div>
			<div className={css.inputWrapper}>
				{!isSearchActive && <Search/>}
				<input
					type="text"
					placeholder="Search"
					onClick={()=>setIsSearchActive(true)}
				/>
			</div>
		</header>
	);
};
