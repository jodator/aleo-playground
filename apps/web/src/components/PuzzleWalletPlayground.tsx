import { ProgramRecords } from '@/components/ProgramRecords.tsx'

export function PuzzleWalletPlayground() {
  return <div>
    <h2 className="text-orange-100 text-2xl font-bold my-2">Puzzle Wallet SDK</h2>
    <ProgramRecords programId={'iou_token_v001.aleo'} />
    <ProgramRecords programId="credits.aleo" />
  </div>
}

