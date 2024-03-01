import { useContext } from "react";
import { Post } from "../types";
import { PostsContext } from "../App";

export default function List() {
  const { posts } = useContext(PostsContext);
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
