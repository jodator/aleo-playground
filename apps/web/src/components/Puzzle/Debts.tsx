import { useProgramRecords } from '@/hooks/puzzle/useProgramRecords.ts'
import { requestCreateEvent, shortenAddress } from '@puzzlehq/sdk'
import { EventType } from '@puzzlehq/types'
import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'

export function Debts() {
  const { records, loading } = useProgramRecords('iou_token_v001.aleo')
  const { data } = useQuery({
    queryKey: ['publicDebt'],
    queryFn: async () => {
      const response = await fetch('https://api.explorer.aleo.org/v1/testnet3/program/iou_token_v001.aleo/mapping/publicDebt/aleo10jukdehyxg66gcey8lklu9t0edfmh6m4jtxyq2rmut84nsxqtq9qjzujqq', { mode: 'no-cors' })
      return response.json()
    },
  })

  console.log('Query data', data)

  const onReveal = useCallback(async (record: unknown) => {
    const response = await requestCreateEvent({
      type: EventType.Execute,
      programId: 'iou_token_v001.aleo',
      functionId: 'reveal',
      fee: 10,
      inputs: [JSON.stringify(record)],
    })
    if (response.error) {
      console.error(response.error)
    } else {
      alert('Reveal successful\nEvent ID: ' + response.eventId)
    }
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="flex flex-row gap-4">
      {records.map(({ data }) => (
        <div key={data._nonce}
             className="border-2 p-8 border-orange-600 rounded basis-1/4 grow-0 shrink overflow-ellipsis text-orange-900 bg-orange-200">
          amount: {data.amount}<br />
          issuer: {shortenAddress(data.issuer)}<br />
          revealed: {data.revealed}<br />
          <br />
          <button className="rounded bg-orange-600 p-2 text-black" onClick={() => onReveal(data)}>Reveal</button>
        </div>
      ))}
    </div>
  )
}