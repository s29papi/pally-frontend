"use client"
import { useState, useEffect } from 'react';
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer); 
  }, []);

  if (!process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID) {
    return 
  }
  
  return (
    <DynamicContextProvider
    settings={{
      // Find your environment id at https://app.dynamic.xyz/dashboard/developer
      environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID,
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <main className="flex w-full h-full">
{
 loading
   ?
   <div className='flex'>Be r</div>
   :
   <div className='flex'>Jai</div>
}
</main>
    <DynamicWidget  />
  </DynamicContextProvider>
  );
}


