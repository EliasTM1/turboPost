import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

export type MainProps = {
	posts: any;
	onAddPost: any;
};

export default function Main({ posts, onAddPost }: MainProps) {
	return (
		<main>
			{/* <FormAddPost onAddPost={onAddPost} />
			<Posts posts={posts} /> */}
		</main>
	);
}
