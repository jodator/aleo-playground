import { useWallet } from '@demox-labs/aleo-wallet-adapter-react'
import { useEffect, useState } from 'react'

export function useLeoWalletRecords(programName: string) {
  const { connected, requestRecordPlaintexts, publicKey } = useWallet()
  const [records, setRecords] = useState<Record<string, unknown>[] | null>(null)

  useEffect(() => {
    setRecords(null)

    if (connected && publicKey && requestRecordPlaintexts) {
      requestRecordPlaintexts?.(programName).then((records) => {
        setRecords(records)
      })
    }
  }, [connected, programName, publicKey, requestRecordPlaintexts])

  return records
}