import { ProgramRecords } from '@/components/ProgramRecords.tsx'

export function PuzzleWalletPlayground() {
  return <div>
    <h2>Puzzle SDK</h2>
    <ProgramRecords programId={'iou_token_v001.aleo'} />
    <ProgramRecords programId="credits.aleo" />
  </div>
}

