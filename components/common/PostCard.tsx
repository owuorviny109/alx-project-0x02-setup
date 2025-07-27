import { PostProps } from '../../interfaces';

export default function PostCard({ id, title, body, userId }: PostProps) {
  // Truncate content if it's too long
  const truncatedBody = body.length > 150 ? body.substring(0, 150) + '...' : body;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          #{id}
        </span>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        {truncatedBody}
      </p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>User ID: {userId}</span>
        {body.length > 150 && (
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Read more
          </button>
        )}
      </div>
    </div>
  );
}