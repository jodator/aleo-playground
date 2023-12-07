import { useWallet } from '@demox-labs/aleo-wallet-adapter-react'
import { useEffect, useState } from 'react'

export interface ProgramRecord<T> {
  "id": string,
  "owner": string,
  "program_id": string,
  "spent": false,
  "recordName": string,
  "data": T,
  "ciphertext": string,
  "plaintext": string,
  "serialNumber": string,
  "transactionIdCreated": string
}

export function useLeoWalletRecords<T>(programName: string) {
  const { connected, requestRecords, publicKey } = useWallet()
  const [records, setRecords] = useState<ProgramRecord<T>[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setRecords(null)
    setIsLoading(true)

    if (connected && publicKey && requestRecords) {
      requestRecords?.(programName).then((records) => {
        setRecords(records)
        setIsLoading(false)
      })
    }
  }, [connected, programName, publicKey, requestRecords])

  return { records, isLoading }
}