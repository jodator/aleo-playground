import { Code } from '@/components/Code.tsx'
import { useLeoWalletRecords } from '@/hooks/leo-wallet/useLeoWalletRecords.ts'

interface Props {
  programId: string
}

export const AleoRecords = ({ programId }: Props) => {
  const { records, isLoading } = useLeoWalletRecords(programId, { includeSpent: true })

  return (
    <div className="text-slate-400">
      Records from program <strong className="text-white">{programId}</strong>:

      {isLoading && <div>Loading...</div>}
      {!isLoading && !records?.length && <div>No records found</div>}

      {!isLoading && !!records?.length && (
        <div>
          {!!records && <Code jsonData={records} />}
        </div>
      )}
    </div>
  )
}