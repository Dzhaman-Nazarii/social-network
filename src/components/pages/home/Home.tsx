import { FC, useState } from "react";
import { AddPost } from "./AddPost";
import { Box } from "@mui/material";
import { IPost } from "../../../types";
import Posts from "./Posts";
import { initialPosts } from "./initialPosts";

export const Home:FC = () => {
	const [posts, setPosts] = useState<IPost[]>(initialPosts);
	
	return (
		<Box>
			<AddPost setPosts={setPosts}/>
			<Posts posts={posts}></Posts>
		</Box>
	)
}