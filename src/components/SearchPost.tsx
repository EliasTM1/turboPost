import { useContext } from "react";
import { PostsContext } from "../App";

export default function SearchPost() {
	const {  searchQuery, setSearchQuery} = useContext(PostsContext);
	return (
		<input
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			placeholder='Search posts...'
		/>
	);
}
