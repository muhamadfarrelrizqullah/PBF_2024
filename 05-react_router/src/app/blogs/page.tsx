// export default function Blog() {
//   return <h1>Blog</h1>;
// }

import Link from "next/link";

export default function BlogList() {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        <li>
          <Link href="/blogs/1">First Blog</Link>
        </li>
        <li>
          <Link href="/blogs/2">Second Blog</Link>
        </li>
      </ul>
    </div>
  );
}
