
import { useContext } from 'react';

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
	const posts = useContext(PostsContext)
	return <div>Header</div>;
}
