import { Alert, Box, TextField } from "@mui/material";
import { FC, KeyboardEvent, useState } from "react";
import { IPost, TypeSetState } from "../../../types";
import { useAuth } from "../../providers/useAuth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../..";
import { formatCreatedAt } from "./Posts";

interface IAddPost {
	setPosts: TypeSetState<IPost[]>;
}

export const AddPost: FC<IAddPost> = ({ setPosts }) => {
	const { user } = useAuth();
	const [content, setContent] = useState("");
	const [error, setError] = useState<string | null>(null);

	const addPostHandler = async (evt: KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === "Enter" && user && content.trim()) {
			try {
				await addDoc(collection(db, "posts"), {
					author: user,
					content,
					createdAt: formatCreatedAt(new Date())
				});
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("An unknown error occurred");
				}
			}


			setContent("");
		}
	};

	return (
		<>
			{error && (
				<Alert
					severity="error"
					style={{ marginBottom: 20 }}>
					{error}
				</Alert>
			)}
			<Box
				sx={{
					border: "1px solid #ccc",
					borderRadius: "10px",
					padding: 2,
				}}>
				<TextField
					label="What`s on your mind?"
					variant="outlined"
					InputProps={{
						sx: {
							borderRadius: "25px",
							backgroundColor: "#F9F9F9",
						},
					}}
					sx={{
						width: "100%",
					}}
					onChange={(evt) => setContent(evt.target.value)}
					onKeyPress={addPostHandler}
					value={content}
				/>
			</Box>
		</>
	);
};
