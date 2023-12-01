import { useProgramRecords } from '@/hooks/useProgramRecords.ts'

export function Debts() {
  const { records, loading } = useProgramRecords('iou_token_v001.aleo')

  if (loading) return <div>Loading...</div>

  return (
    <div>
      Outstanding debt tickets: {records.length}
      {records.map(({ data }) => (
        <div>
          amount: {data.amount}
          issuer: {data.issuer}
          nonce: {data._nonce}
        </div>
      ))}
    </div>
  )
}