import posts from '../../data/posts.json';
import '../../../styles/Post.css';
import { notFound } from 'next/navigation';

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return posts.map((post: Post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find((p: Post) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
