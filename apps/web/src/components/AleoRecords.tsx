import { useWallet } from '@demox-labs/aleo-wallet-adapter-react'
import { useCallback, useState } from 'react'
import { Code } from '@/components/Code.tsx'

interface Props {
  programId: string
}

export const AleoRecords = ({ programId }: Props) => {
  const { connected, requestRecords, publicKey } = useWallet()
  const [records, setRecords] = useState<Record<string, unknown>[] | null>(null)

  const onClick = useCallback(() => {
    setRecords(null)

    if (publicKey && requestRecords) {
      requestRecords?.(programId).then((records) => {
        console.log('records?', records)
        setRecords(records)
      }).catch((err) => {
        console.log('error?', err)
      })
    }
  }, [publicKey, requestRecords])

  return (
    <div className="text-slate-400">
      <div>
        <button className="bg-blue-400 p-2 rounded text-slate-900" disabled={!connected} onClick={onClick}>Get Records</button>
      </div>
      Records from program <strong className="text-white">{programId}</strong>:

      <div>
        {!!records && <Code jsonData={records} />}
      </div>
    </div>
  )
}