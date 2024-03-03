import { FormEvent, useState } from "react";
import { usePosts } from "../PostContext";

export default function FormAddPost() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const { onAddPosts } = usePosts();

	const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!body || !title) return;
		onAddPosts({ title, body });
		setTitle("");
		setBody("");
	};
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Post title'
			/>
			<textarea
				value={body}
				onChange={(e) => setBody(e.target.value)}
				placeholder='Post body'
			/>
			<button>Add post</button>
		</form>
	);
}
