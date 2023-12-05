import { useProgramRecords } from '@/hooks/useProgramRecords.ts'
import { shortenAddress } from '@puzzlehq/sdk'
import { useCallback } from 'react'

export function Debts() {
  const { records, loading } = useProgramRecords('iou_token_v001.aleo')


  const onReveal = useCallback((record: unknown) => {
    console.log('reveal', record)
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="flex flex-row gap-4">
      {records.map(({ data }) => (
        <div key={data._nonce} className="border-2 p-8 border-orange-600 rounded basis-1/4 grow-0 shrink overflow-ellipsis text-orange-900 bg-orange-200">
          amount: {data.amount}<br />
          issuer: {shortenAddress(data.issuer)}
          <br />
          <button className="rounded bg-orange-600 p-2 text-black" onClick={() => onReveal(data)}>Reveal</button>
        </div>
      ))}
    </div>
  )
}