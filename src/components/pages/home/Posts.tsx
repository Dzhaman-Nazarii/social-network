import { FC } from "react";
import { IPost } from "../../../types";
import { Avatar, Box, ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

interface IPosts {
	posts: IPost[];
}

export const Posts: FC<IPosts> = ({ posts }) => {
	const formatCreatedAt = (createdAt: Date) => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		};
		return createdAt.toLocaleDateString('en-US', options);
	};
	return (
		<>
			{posts.map((post, index) => (
				<Box
					key={`Post-${index}`}
					sx={{
						border: "1px solid #ccc",
						borderRadius: "10px",
						padding: 2,
						marginTop: 3
					}}>
					<Link
						to={`/profile/${post.author.id}`}
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
									marginRight: '5px',
									width: 50,
									height: 50,
								}}>
								<Avatar
									sx={{
										width: 46,
										height: 46,
										borderRadius: "50%",
									}}
									src={post.author.avatar}
									alt="avatar"
								/>
							</Box>
							<div>
								<span style={{ fontSize: 14, marginRight: '5px' }}>
									{post.author.name}
								</span>
								<span style={{ fontSize: 14, opacity: "0.6" }}>
									{formatCreatedAt(post.createdAt)}
								</span>
							</div>
							{post?.images?.length && (
								<ImageList variant="masonry" cols={3} gap={8}>
									{post.images.map(image => 
										<ImageListItem key={image}>
											<img
												src={image}
												loading="lazy"
												alt={image}
											/>
										</ImageListItem>
									)}
								</ImageList>
							)}
						</Box>
					</Link>
					<Box>
						<p>{post.content}</p>
					</Box>
				</Box>
			))}
		</>
	);
};

