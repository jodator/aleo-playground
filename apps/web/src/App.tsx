import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"

import { PuzzleWalletPlayground } from '@/components/PuzzleWalletPlayground.tsx'
import { LeoWalletPlayground, Wallet } from '@/components/LeoWalletPlayground.tsx'

function App() {
  return (
    <div className="container md mx-auto">
      <Wallet>
        <PuzzleWalletPlayground />
        <hr />
        <LeoWalletPlayground />
      </Wallet>
    </div>
  )
}

export default App

