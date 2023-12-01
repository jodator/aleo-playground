import { useAccount, useRecords } from '@puzzlehq/sdk'

export function useProgramRecords(programId: string) {
  const { account } = useAccount()
  return useRecords({
    address: account?.address,
    filter: { type: 'unspent', programId },
  })
}