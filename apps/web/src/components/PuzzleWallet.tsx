import { useAccount, useConnect, useDisconnect } from '@puzzlehq/sdk'
import { useCallback } from 'react'
import { shortenAddress } from '@/utils/shortenAddress.tsx'

export function PuzzleWallet() {
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

  return (<div className="flex mt-4 justify-end">
    <span className="p-2 text-orange-400">{account && <>{shortenAddress(account.address)}</>}</span>
    <button className="rounded bg-orange-600 p-2 text-black" onClick={onClick}>{account ? 'Disconnect' : 'Connect'}</button>
  </div>)
}