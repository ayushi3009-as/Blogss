'use client';
import { useState } from 'react';
import posts from './data/posts.json';
import '../styles/Home.css';

interface Post {
  title: string;
  slug: string;
  content: string;
}

export default function HomePage() {
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>My Blog</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <ul className="post-list">
        {filteredPosts.map((post: Post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
