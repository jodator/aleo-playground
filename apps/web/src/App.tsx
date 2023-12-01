import './App.css'
import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"
import { PuzzleWalletPlayground } from '@/components/PuzzleWalletPlayground.tsx'
import { LeoWalletPlayground, Wallet } from '@/components/LeoWalletPlayground.tsx'

function App() {
  return (
    <Wallet>
      <PuzzleWalletPlayground />
      <hr />
      <LeoWalletPlayground />
    </Wallet>
  )
}

export default App

