import { useAccount, useConnect, useDisconnect } from '@puzzlehq/sdk'
import { ProgramRecords } from '@/components/ProgramRecords.tsx'

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

  return <div>
    <h2>Puzzle SDK</h2>
    {!account && <button onClick={connect}>Connect</button>}
    {account && <>{shortenAddress(account.address)}
      <button onClick={disconnect}>Disconnect</button>
    </>}
    <ProgramRecords programId={'iou_token_v001.aleo'} />
    <ProgramRecords programId="credits.aleo" />
  </div>
}