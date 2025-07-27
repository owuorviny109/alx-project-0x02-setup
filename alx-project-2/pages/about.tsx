import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            About This Project
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              This is a comprehensive Next.js project that demonstrates modern web development 
              practices using TypeScript and Tailwind CSS. The project covers fundamental 
              concepts including routing, component creation, API integration, and state management.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Built as part of the ALX Software Engineering program, this project showcases 
              best practices in React development and serves as a foundation for more complex applications.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Button Component Examples
            </h2>
            <p className="text-gray-600 mb-6">
              Below are examples of our reusable Button component with different sizes and shapes:
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="small" shape="rounded-sm">
                Small Button
              </Button>
              <Button size="medium" shape="rounded-md">
                Medium Button
              </Button>
              <Button size="large" shape="rounded-full">
                Large Button
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}