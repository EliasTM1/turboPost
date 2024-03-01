import { Post } from "../types"
import List from "./List";

export type PostsProps = {
  posts: Post[]
}
export default function Posts({posts}: PostsProps) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
