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
        <PuzzleWallet />
        <AleoCredits />
        <Debts />

        <hr className="border-t-2 mt-10 border-slate-500" />
        <PuzzleWalletPlayground />

        <hr className="border-t-2 mt-10 border-slate-500" />
        <LeoWalletPlayground />
      </div>
    </QueryClientProvider>
  )
}

export default App

