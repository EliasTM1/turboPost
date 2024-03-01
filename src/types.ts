import { Dispatch } from "react";

export type Post = {
	title: string;
	body: string;
};

export type ContextType = {
	posts: Post[];
	searchQuery: string;
	setSearchQuery: Dispatch<any>;
	onClearPosts: Dispatch<any>;
	onAddPosts: Dispatch<any>;
};
