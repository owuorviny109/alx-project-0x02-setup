import Link from 'next/link';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Next.js Project Setup and Basics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Welcome to the ALX Next.js project! This application demonstrates modern web development 
              practices using Next.js, TypeScript, and Tailwind CSS. Explore the different sections 
              to see components, routing, and API integration in action.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Home</h3>
                <p className="text-gray-600 mb-4">
                  Interactive home page with reusable Card components and modal functionality.
                </p>
                <Link href="/home">
                  <Button size="medium" shape="rounded-md">
                    Visit Home
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 mb-4">
                  Learn about this project and see different Button component variations.
                </p>
                <Link href="/about">
                  <Button size="medium" shape="rounded-md">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Posts</h3>
                <p className="text-gray-600 mb-4">
                  Browse posts fetched from JSONPlaceholder API with PostCard components.
                </p>
                <Link href="/posts">
                  <Button size="medium" shape="rounded-md">
                    View Posts
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Users</h3>
                <p className="text-gray-600 mb-4">
                  Explore user profiles displayed with UserCard components and API integration.
                </p>
                <Link href="/users">
                  <Button size="medium" shape="rounded-md">
                    View Users
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Project Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">TypeScript Integration</h4>
                  <p className="text-gray-600 text-sm">
                    Full TypeScript support with proper interfaces and type safety.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Reusable Components</h4>
                  <p className="text-gray-600 text-sm">
                    Modular components with props for maximum reusability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">API Integration</h4>
                  <p className="text-gray-600 text-sm">
                    Dynamic content fetching with proper loading and error states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
