'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Higher-Order Component for route protection
export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = document.cookie.includes('auth=true');
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [router]);

    return <Component {...props} />;
  };
}
