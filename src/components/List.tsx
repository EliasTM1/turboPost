import { Post } from "../types"

type ListProps = { 
  posts: Post[]
}
export default function List({posts}: ListProps) {
  return (
    <div>List</div>
  )
}
