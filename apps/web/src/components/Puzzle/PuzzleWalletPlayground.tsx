import { ProgramRecords } from '@/components/Puzzle/ProgramRecords.tsx'

export function PuzzleWalletPlayground() {
  return <div>
    <ProgramRecords programId="iou_token_v001.aleo" />
    <ProgramRecords programId="credits.aleo" />
  </div>
}

