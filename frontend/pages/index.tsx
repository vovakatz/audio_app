import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // If user already has a token, redirect to main
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token)
      router.push('/main');
    } else {
      router.push('/login');
    }
  }, [router]);

  return null;
}