import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center mb-8">
        <Link href="/" className="inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 text-linkedin-blue dark:text-linkedin-lightBlue mx-auto">
            <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
      </div>
      
      <div className="max-w-md w-full bg-white dark:bg-linkedin-darker rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex space-x-4 justify-center">
              <Link 
                href="/"
                className="px-5 py-2 bg-linkedin-blue hover:bg-linkedin-darkBlue text-white rounded-md transition-colors"
              >
                Return Home
              </Link>
              <Link
                href="/feed"
                className="px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Go to Feed
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Need help? <Link href="#" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">Contact Support</Link>
      </p>
    </div>
  );
} 