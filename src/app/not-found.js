import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1E1B4B] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/" 
          className="bg-[#008080] text-white font-bold py-3 px-6 rounded-full hover:bg-[#006666] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}