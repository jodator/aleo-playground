import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"

import { PuzzleWalletPlayground } from '@/components/PuzzleWalletPlayground.tsx'
import { LeoWalletPlayground } from '@/components/LeoWalletPlayground.tsx'
import { PuzzleWallet } from '@/components/PuzzleWallet.tsx'
import { AleoCredits } from '@/components/AleoCredits.tsx'
import { Debts } from '@/components/Debts.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container md mx-auto">
        <h2 className="text-orange-100 text-2xl font-bold my-2">Puzzle Wallet SDK</h2>
        <hr className="border-t-2 mb-10 border-slate-500" />

        <PuzzleWallet />
        <AleoCredits />
        <Debts />

        <PuzzleWalletPlayground />

        <h2 className="text-orange-100 text-2xl font-bold my-2">Leo Wallet SDK</h2>
        <hr className="border-t-2 mb-10 border-slate-500" />
        <LeoWalletPlayground />
      </div>
    </QueryClientProvider>
  )
}

export default App

