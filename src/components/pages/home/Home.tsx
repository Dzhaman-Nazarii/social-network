import { FC, useEffect, useState } from "react";
import { AddPost } from "./AddPost";
import { Box } from "@mui/material";
import { IPost } from "../../../types";
import { Posts } from "./Posts";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../..";

export const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      const updatedPosts: IPost[] = [];
      snapshot.forEach((doc) => {
        updatedPosts.push(doc.data() as IPost);
      });
      setPosts(updatedPosts);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};
