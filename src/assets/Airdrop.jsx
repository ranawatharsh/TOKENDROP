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
    <div>
      <input id='amnt' type='text' placeholder='Amount'></input>
      <button  onClick={sendAirdrop}>Send Airdrop </button>
    </div>
  )
}

export default Airdrop
