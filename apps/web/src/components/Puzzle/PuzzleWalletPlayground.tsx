import { ProgramRecords } from '@/components/Puzzle/ProgramRecords.tsx'
import { PuzzleWallet } from '@/components/Puzzle/PuzzleWallet.tsx'
import { AleoCredits } from '@/components/Puzzle/AleoCredits.tsx'
import { Debts } from '@/components/Puzzle/Debts.tsx'

export function PuzzleWalletPlayground() {
  return (
    <div>
      <h2 className="text-orange-100 text-2xl font-bold my-2">Puzzle Wallet SDK</h2>
      <hr className="border-t-2 mb-10 border-slate-500" />

      <PuzzleWallet />
      <AleoCredits />
      <Debts />

      <ProgramRecords programId="iou_token_v001.aleo" />
      <ProgramRecords programId="credits.aleo" />
    </div>
  )
}

