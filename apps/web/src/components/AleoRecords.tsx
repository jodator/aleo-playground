import { Code } from '@/components/Code.tsx'
import { useLeoWalletRecords } from '@/hooks/useLeoWalletRecords.tsx'

interface Props {
  programId: string
}

export const AleoRecords = ({ programId }: Props) => {
  const records = useLeoWalletRecords(programId)

  return (
    <div className="text-slate-400">
      Records from program <strong className="text-white">{programId}</strong>:

      <div>
        {!!records && <Code jsonData={records} />}
      </div>
    </div>
  )
}