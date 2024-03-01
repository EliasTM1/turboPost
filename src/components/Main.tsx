import Posts from "./Posts";
import FormAddPost from "./FormAddPost";

// export type MainProps = {
// 	posts: any;
// 	onAddPost: any;
// };

export default function Main() {
	return (
		<main>
			<FormAddPost />
			<Posts />
		</main>
	);
}
