import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href="/products/1">First Product</Link>
        </li>
        <li>
          <Link href="/products/2">Second Product</Link>
        </li>
      </ul>
    </div>
  );
}
