import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>Category Page</h1>
      <p>Category: {category}</p>
    </div>
  );
}
