import { useAccount, useConnect, useDisconnect } from '@puzzlehq/sdk'
import { ProgramRecords } from '@/components/ProgramRecords.tsx'
import { useCallback } from 'react'

const shortenAddress = (address: string) => {
  const length = 5
  if (address.length < length * 2) return address
  return `${address.slice(0, length + 'aleo1'.length)}...${address.slice(
    address.length - length,
    address.length,
  )}`
}

export function PuzzleWalletPlayground() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { account } = useAccount()

  const onClick = useCallback(() => {
    if (account) {
      void disconnect()
    } else {
      void connect()
    }
  }, [account, connect, disconnect])

  return <div>
    <h2>Puzzle SDK</h2>
    <div className="">
      <button className="rounded bg-orange-600 p-2 text-black" onClick={onClick}>{account ? 'Disconnect' : 'Connect'}</button>
      <span className="p-2 text-orange-400">{account && <>{shortenAddress(account.address)}</>}</span>
    </div>
    <ProgramRecords programId={'iou_token_v001.aleo'} />
    <ProgramRecords programId="credits.aleo" />
  </div>
}