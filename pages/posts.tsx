import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        
        // Add some sample English posts at the beginning
        const sampleEnglishPosts: PostProps[] = [
          {
            id: 0,
            title: "Welcome to Our Next.js Blog",
            body: "This is a comprehensive Next.js application that demonstrates modern web development practices. We're using TypeScript for type safety, Tailwind CSS for styling, and fetching data from external APIs to create dynamic content.",
            userId: 1
          },
          {
            id: -1,
            title: "Building Reusable Components",
            body: "One of the key benefits of React and Next.js is the ability to create reusable components. In this project, we've built Card, Button, PostCard, and UserCard components that can be used throughout the application with different props.",
            userId: 1
          },
          {
            id: -2,
            title: "API Integration Best Practices",
            body: "This application demonstrates how to properly integrate with external APIs, handle loading states, manage errors gracefully, and display data in a user-friendly format. We're using the JSONPlaceholder API for demonstration purposes.",
            userId: 1
          }
        ];
        
        // Combine sample posts with API data, limiting API posts to ensure good performance
        const combinedPosts = [...sampleEnglishPosts, ...data.slice(0, 20)];
        setPosts(combinedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading posts...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Error loading posts
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Posts from JSONPlaceholder API
          </h1>
          
          <div className="mb-4 text-gray-600">
            Showing {posts.length} posts
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard 
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}