import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import Button from '../components/common/Button';
import { PostFormData } from '../interfaces';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<PostFormData[]>([]);

  const handleAddPost = (postData: PostFormData) => {
    setUserPosts(prev => [...prev, postData]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to the Home Page
            </h1>
            <Button 
              size="medium" 
              shape="rounded-md"
              onClick={() => setIsModalOpen(true)}
            >
              Add New Post
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card 
              title="Getting Started"
              content="This is your home page where you can see various cards and interact with the application. Explore the different sections using the navigation above."
            />
            <Card 
              title="Next.js Features"
              content="This project demonstrates Next.js routing, TypeScript integration, and component-based architecture. Each card is a reusable component."
            />
            <Card 
              title="Interactive Elements"
              content="Click the 'Add New Post' button to open a modal dialog. This showcases dynamic content updates and state management in action."
            />
          </div>

          {userPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userPosts.map((post, index) => (
                  <Card 
                    key={index}
                    title={post.title}
                    content={post.content}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}