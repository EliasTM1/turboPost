import { useContext } from "react";
import { PostsContext } from "../App";
import Results from "./Results";
import SearchPost from "./SearchPost";

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
	const posts = useContext(PostsContext);
	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				{/* <Results posts={posts} />
				<SearchPost
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<button onClick={onClearPosts}>Clear posts</button> */}
			</div>
		</header>
	);
}
