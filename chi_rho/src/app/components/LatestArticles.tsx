import { useState, useEffect } from 'react';
import LatestArticleTile from './LatestArticleTile';
import { getPosts } from '@/lib/post';
import { BlogPost } from '@/lib/post'; // Update the import path

export default function LatestArticles() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts.slice(0, 3) as BlogPost[]); // Type assertion
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <LatestArticleTile
          key={post.id}
          imageUrl={post.imageUrl}
          title={post.title}
          shortDescription={post.shortDescription} // Changed from shortDescription to description
          category={post.category}
          author={post.author}
          date={post.date}
          longDescription={post.longDescription}
        />
      ))}
    </div>
  );
}