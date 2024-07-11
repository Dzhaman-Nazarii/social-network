import { Box, TextField } from "@mui/material";
import { FC, KeyboardEvent, useState } from "react";
import { IPost, TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUsers";

interface IAddPost {
	setPosts: TypeSetState<IPost[]>
}

export const AddPost: FC<IAddPost> = ({setPosts}) => {
	const [content, setContent] = useState('');

	const addPostHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
		if(evt.key === 'Enter') {
			setPosts(prev => [
				{
					author: users[0],
					content,
					createdAt: new Date()
				},...prev
			]);
			setContent('');
		}
	}

	return (
		<Box sx={{
			border: '1px solid #ccc',
			borderRadius: '10px',
			padding: 2
		}}>
			<TextField label='What`s on your mind?' variant="outlined" InputProps={{
				sx: {borderRadius: '25px', backgroundColor: '#F9F9F9'}
			}} sx={{
				width: '100%'
			}}
			onChange={evt=> setContent(evt.target.value)}
			onKeyPress={addPostHandler}
			value={content}
			/>
		</Box>
	)}