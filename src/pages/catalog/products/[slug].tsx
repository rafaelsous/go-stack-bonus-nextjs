import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <h1>Product {query.slug}</h1>
  );
}