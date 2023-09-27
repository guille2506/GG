import { useRouter } from 'next/router';

export default function CustomRoute() {
  const router = useRouter();
  const { slug } = router.query;
  const path = slug ? slug.join('/') : '';

  return (
    <div>
      <h1>Custom Route</h1>
      <p>Path: {path}</p>
    </div>
  );
}
