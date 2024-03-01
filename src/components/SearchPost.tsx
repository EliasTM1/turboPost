type SearchPostProps = {
	searchQuery: string;
	setSearchQuery: () => void;
};

export default function SearchPost({
	searchQuery,
	setSearchQuery,
}: SearchPostProps) {
	return (
		<input
			value={searchQuery}
			// onChange={(e) => setSearchQuery(e.target.value)}
			placeholder='Search posts...'
		/>
	);
}
