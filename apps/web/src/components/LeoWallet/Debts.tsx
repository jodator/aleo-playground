import { useCallback } from 'react'
import { ProgramRecord, useLeoWalletRecords } from '@/hooks/leo-wallet/useLeoWalletRecords.ts'
import { shortenAddress } from '@/utils/shortenAddress.tsx'
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react'
import { Transaction, WalletAdapterNetwork } from '@demox-labs/aleo-wallet-adapter-base'

interface IOUTicket {
  amount: string
  issuer: string
  revealed: string
}

class LeoBoolean {
  public value: boolean
  public visibility: 'public' | 'private'

  constructor(value: boolean, visibility: "public" | "private") {
    this.value = value
    this.visibility = visibility
  }

  static fromString(str: string): LeoBoolean {
    const [value, visibility] = str.split('.')

    return new LeoBoolean(value === 'true', visibility as 'public' | 'private')
  }
}

export function Debts() {
  const { records, isLoading } = useLeoWalletRecords<IOUTicket>('iou_token_v001.aleo')
  const { publicKey, requestTransaction } = useWallet()

  const onReveal = useCallback(async (record: ProgramRecord<IOUTicket>) => {
    if (!publicKey || !requestTransaction) return

    const inputs = [record]
    const fee = 4_000_000
    const aleoTransaction = Transaction.createTransaction(
      publicKey,
      WalletAdapterNetwork.Testnet,
      'iou_token_v001.aleo',
      'reveal',
      inputs,
      fee,
    )

    const response = await requestTransaction(aleoTransaction)
    console.log('TX response:', response)
  }, [publicKey, requestTransaction])

  if (isLoading) return <div>Loading...</div>

  if (!records) return <div>No records</div>

  return (
    <div className="flex flex-row gap-4">
      {records.map((record) => (
        <div key={record.id}
             className="border-2 p-4 border-blue-600 rounded basis-1/4 grow-0 shrink overflow-ellipsis text-blue-900 bg-blue-200">
          amount: {record.data.amount}<br />
          issuer: {shortenAddress(record.data.issuer)}<br />
          revealed: {record.data.revealed}<br />
          <br />
          {!LeoBoolean.fromString(record.data.revealed).value &&
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => onReveal(record)}>Reveal</button>}
        </div>
      ))}
    </div>
  )
}