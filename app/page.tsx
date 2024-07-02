"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <main className="flex w-full h-full">
         {
          loading
            ?
            <div className='flex'>Be r</div>
            :
            <div className='flex'>Jai</div>
         }
    </main>
  );
}
