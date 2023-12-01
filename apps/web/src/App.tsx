import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"

import { PuzzleWalletPlayground } from '@/components/PuzzleWalletPlayground.tsx'
import { LeoWalletPlayground, Wallet } from '@/components/LeoWalletPlayground.tsx'
import { PuzzleWallet } from '@/components/PuzzleWallet.tsx'

function App() {
  return (
    <div className="container md mx-auto">
      <PuzzleWallet />

      <hr className="border-t-2 mt-10 border-slate-500" />

      <PuzzleWalletPlayground />

      <Wallet>
        <LeoWalletPlayground />
      </Wallet>
    </div>
  )
}

export default App

