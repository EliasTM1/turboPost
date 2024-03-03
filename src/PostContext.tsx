import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { ContextType, Post } from "./types";

function createRandomPost() {
	return {
		title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
		body: faker.hacker.phrase(),
	};
}

const PostsContext = createContext<ContextType>({} as ContextType);

function PostProvider({ children }) {
	const [posts, setPosts] = useState(() =>
		Array.from({ length: 30 }, () => createRandomPost())
	);
	const [searchQuery, setSearchQuery] = useState("");

	// Derived state. These are the posts that will actually be displayed
	const searchedPosts =
		searchQuery.length > 0
			? posts.filter((post) =>
					`${post.title} ${post.body}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			)
			: posts;

	function handleAddPost(post: Post) {
		setPosts((posts) => [post, ...posts]);
	}

	function handleClearPosts() {
		setPosts([]);
	}

	return (
		<PostsContext.Provider
			value={{
				posts: searchedPosts,
				searchQuery,
				setSearchQuery,
				onClearPosts: handleClearPosts,
				onAddPosts: handleAddPost,
			}}
		>
			{children}
		</PostsContext.Provider>
	);
}

// * It is a common practice to place the contect and the hook that is gonna expose it.
function usePosts() {
	const context = useContext(PostsContext);
	if(!context){
		throw new Error("Post contect was used outside of the prost provider")
	}
	return context;
}

export { PostProvider, usePosts };
