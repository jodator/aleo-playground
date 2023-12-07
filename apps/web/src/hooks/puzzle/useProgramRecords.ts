import { RecordWithPlaintext, useAccount, useRecords } from '@puzzlehq/sdk'
import { useMemo } from 'react'

export function useProgramRecords(programId: string) {
  const { account } = useAccount()
  const data = useRecords({
    address: account?.address,
    filter: { type: 'unspent', programId },
  })

  const records = data?.records ?? []
  const uniqueRecords = useMemo(() => {
    return getUniqueRecords(records).filter(({ programId: pId }) => pId === programId)
  }, [JSON.stringify(records.map(r => r.ciphertext))])

  return { ...data, records: uniqueRecords }
}

function getUniqueRecords(records: RecordWithPlaintext[]) {
  const map = new Map()

  for (const record of (records)) {
    map.set(record.ciphertext, record)
  }

  return [...map.values()]
}