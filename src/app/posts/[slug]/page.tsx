import posts from '../../data/posts.json';
import '../../../styles/Post.css';
import { notFound } from 'next/navigation';

type Params = {
  slug: string;
};

interface Post {
  title: string;
  slug: string;
  content: string;
  date?: string;
  tags?: string[];
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: Params }) {
  const post: Post | undefined = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="post-wrapper">
      <div className="post-hero">
        <h1 className="post-title">{post.title}</h1>
        {post.date && <p className="post-date">{new Date(post.date).toDateString()}</p>}
        {post.tags && (
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
