import { Code } from '@/components/Code.tsx'
import { useLeoWalletRecords } from '@/hooks/leo-wallet/useLeoWalletRecords.ts'

interface Props {
  programId: string
}

export const AleoRecords = ({ programId }: Props) => {
  const records = useLeoWalletRecords(programId, { includeSpent: true })

  return (
    <div className="text-slate-400">
      Records from program <strong className="text-white">{programId}</strong>:

      <div>
        {!!records && <Code jsonData={records} />}
      </div>
    </div>
  )
}