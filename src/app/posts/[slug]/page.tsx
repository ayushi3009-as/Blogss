import posts from '../../data/posts.json';
import '../../../styles/Post.css';
import { notFound } from 'next/navigation';

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// ✅ Do NOT define custom PageProps interface, use inferred type
export default async function Page({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
