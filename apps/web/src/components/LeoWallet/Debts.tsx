import { useCallback } from 'react'
import { ProgramRecord, useLeoWalletRecords } from '@/hooks/leo-wallet/useLeoWalletRecords.ts'
import { shortenAddress } from '@/utils/shortenAddress.tsx'

interface IOUTicket {
  amount: number
  issuer: string
  revealed: boolean
}

export function Debts() {
  const { records, isLoading } = useLeoWalletRecords<IOUTicket>('iou_token_v001.aleo')

  const onReveal = useCallback(async (record: ProgramRecord<IOUTicket>) => {
    console.log(record)
  }, [])

  if (isLoading) return <div>Loading...</div>

  if (!records) return <div>No records</div>

  return (
    <div className="flex flex-row gap-4">
      {records.map((record) => (
        <div key={record.id}
             className="border-2 p-8 border-blue-600 rounded basis-1/4 grow-0 shrink overflow-ellipsis text-blue-900 bg-blue-200">
          amount: {record.data.amount}<br />
          issuer: {shortenAddress(record.data.issuer)}<br />
          revealed: {record.data.revealed}<br />
          <br />
          <button className="rounded bg-blue-600 p-2 text-black" onClick={() => onReveal(record)}>Reveal</button>
        </div>
      ))}
    </div>
  )
}