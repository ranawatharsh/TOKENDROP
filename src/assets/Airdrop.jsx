import React from 'react'
import { useConnection,useWallet } from '@solana/wallet-adapter-react'
function Airdrop() {
  const wallet=useWallet();
  const {connection}=useConnection();
  async function sendAirdrop(){
    const amt=document.getElementById('amnt').value
     await connection.requestAirdrop(wallet.publicKey,amt *10000000)
     alert('Airdropped Sol')
  }
  return (
    <div className='flex place-content-center mt-16'>
      <input className='rounded-lg h-12' id='amnt' type='text' placeholder=' Amount'></input>
      <button className='rounded-lg bg-black text-white p-2' onClick={sendAirdrop}>Send Airdrop </button>
    </div>
  )
}

export default Airdrop
