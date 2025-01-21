import { useState } from 'react'
import UserBal from './assets/UserBal';
import Airdrop from './assets/Airdrop';
import './App.css'
import InfoBox from './assets/InfoBox';
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen'>
    <ConnectionProvider  endpoint={'https://solana-devnet.g.alchemy.com/v2/AwvxV9W3-QCnXSn3h3tTMhywObfNihvB'}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider >
                    <div className="flex flex-row justify-between items-center p-2">
                    <WalletMultiButton  />
                    <h1 className='text-white font-bold  text-3xl'>$trump DROP</h1>
                     <WalletDisconnectButton />
                     </div>
                     <div className='flex place-content-center  mt-16'>
                     <h2 className='text-white font-bold  text-4xl'>Claim your FREE $Trump </h2>
                     {/* <h3>Join our ecosystem and get rewarded !</h3> */}
                     </div>
                     <Airdrop className='m-2'/>
                     <UserBal/>
                     <InfoBox/>
                    { /* Your app's components go here, nested within the context providers. */ }
                </WalletModalProvider>
            </WalletProvider>
    </ConnectionProvider>
    </div>
  )
}

export default App
