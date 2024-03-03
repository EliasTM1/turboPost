import { usePosts } from "../PostContext";

export default function SearchPost() {
	const {  searchQuery, setSearchQuery} = usePosts();
	return (
		<input
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			placeholder='Search posts...'
		/>
	);
}
