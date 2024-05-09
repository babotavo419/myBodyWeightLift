import React from 'react';
import Layout from '../layout'; 

export default function Blog() {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React and TailwindCSS',
      summary: 'A quick dive into how to use React with TailwindCSS for rapid development.',
      date: 'May 1, 2024'
    },
    {
      id: 2,
      title: 'Why TailwindCSS Is The Future Of Styling',
      summary: 'Explore the reasons why TailwindCSS is becoming so popular among developers.',
      date: 'May 5, 2024'
    },
    {
      id: 3,
      title: 'Optimizing Your React Applications',
      summary: 'Learn some of the best practices for optimizing your React applications for better performance.',
      date: 'May 10, 2024'
    }
  ];

  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-900 text-white text-center p-6">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <p>Welcome to my blog about web development and more!</p>
      </header>

      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-900 text-white text-center p-6 mt-6">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
    </Layout>
  );
}

