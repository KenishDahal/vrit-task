// app/page.js
'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {

  const router = useRouter();

  useEffect(() => {
    // Redirect to login page
    router.push('/login');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <h1 className="text-3xl">Welcome to the Home Page</h1>
    </div>
  );
}
