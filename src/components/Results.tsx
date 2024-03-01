import { useContext } from "react";
import { ContextType } from "../types";
import { PostsContext } from "../App";

export default function Results() {
	const { posts } = useContext<ContextType>(PostsContext);
	return <p>🚀 {posts.length} atomic posts found</p>;
}
