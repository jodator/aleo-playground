import { useProgramRecords } from '@/hooks/useProgramRecords.ts'
import { shortenAddress } from '@puzzlehq/sdk'
import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'

export function Debts() {
  const { records, loading } = useProgramRecords('iou_token_v001.aleo')
  const { data } = useQuery({
    queryKey: ['publicDebt'],
    queryFn: async () => {
      const response = await fetch('https://api.explorer.aleo.org/v1/testnet3/program/iou_token_v001.aleo/mapping/publicDebt/aleo1q6qstg8q8shwqf5m6q5fcenuwsdqsvp4hhsgfnx5chzjm3secyzqt9mxm8')
      return response.json()
    },
  })

  console.log('Query data', data)

  const onReveal = useCallback((record: unknown) => {
    console.log('reveal', record)
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="flex flex-row gap-4">
      {records.map(({ data }) => (
        <div key={data._nonce}
             className="border-2 p-8 border-orange-600 rounded basis-1/4 grow-0 shrink overflow-ellipsis text-orange-900 bg-orange-200">
          amount: {data.amount}<br />
          issuer: {shortenAddress(data.issuer)}
          <br />
          <button className="rounded bg-orange-600 p-2 text-black" onClick={() => onReveal(data)}>Reveal</button>
        </div>
      ))}
    </div>
  )
}