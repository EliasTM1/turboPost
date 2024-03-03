import Results from "./Results";
import SearchPost from "./SearchPost";
import { usePosts } from "../PostContext";

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
	const { onClearPosts} = usePosts();
	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				<Results />
				<SearchPost />
				<button onClick={onClearPosts}>Clear posts</button>
			</div>
		</header>
	);
}
