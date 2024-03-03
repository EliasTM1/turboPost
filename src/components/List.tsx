import { Post } from "../types";
import { usePosts } from "../PostContext";


export default function List() {
  const { posts } = usePosts();
  // console.log(posts, "POOO")
  return (
    <ul>
      {posts.map((post: Post, i: number) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
