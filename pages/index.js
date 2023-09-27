import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/products/1">
        <a>Product 1</a>
      </Link>
      <Link href="/categories/electronics">
        <a>Electronics</a>
      </Link>
      <Link href="/nonexistent-page">
        <a>Nonexistent Page</a>
      </Link>
    </div>
  );
}
