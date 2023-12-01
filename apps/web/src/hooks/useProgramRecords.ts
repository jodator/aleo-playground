import { useAccount, useRecords } from '@puzzlehq/sdk'
import { useMemo } from 'react'

export function useProgramRecords(programId: string) {
  const { account } = useAccount()
  const { records } = useRecords({
    address: account?.address,
    filter: { type: 'unspent', programId },
  })

  return useMemo(() => records, [JSON.stringify(records)])
}