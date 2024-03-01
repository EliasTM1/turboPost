import { useContext } from "react";
import { PostsContext } from "../App";
import Results from "./Results";
import SearchPost from "./SearchPost";
import { ContextType } from "../types";

// import { Post } from "../types";

// type HeaderProps = {
// 	// posts: Post;
// 	posts: any;
// 	searchQuery: string;
// 	onClearPosts: () => void;
// 	// setSearchQuery: () => void;
// 	setSearchQuery:any;
// };

export default function Header() {
	const { posts, onClearPosts} = useContext<ContextType>(PostsContext);
	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				<Results posts={posts} />
				<SearchPost />
				<button onClick={onClearPosts}>Clear posts</button>
			</div>
		</header>
	);
}
