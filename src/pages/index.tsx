import { Header, LandingPageBanner, LoginForm } from '@/components';
import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';
import { Data } from '../mocks/types';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data1, setData1] = useState<Data | null>(null);
  const [data2, setData2] = useState<Data | null>(null);
  useEffect(() => {
    (async () => {
      // turning on the mock server
      // Be careful not to visit before the mock server is turned on.
      const { worker } = await import('../mocks/browser');
      worker.start();

      // getting the data
      const res1 = await fetch('/from-frontend-1');
      const data1 = await res1.json();
      setData1(data1);
      const res2 = await fetch('/from-frontend-2');
      const data2 = await res2.json();
      setData2(data2);
    })();
  }, []);

  console.log(data1, data2)
  return (
    <main className='flex flex-col h-screen'>
      <Header />
      <div className='flex h-full'>
        {/* <button onClick={handleGetReviews}>CLick to mock</button> */}
        <LandingPageBanner />
        <div className='flex flex-col flex-1 items-center justify-center'>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
