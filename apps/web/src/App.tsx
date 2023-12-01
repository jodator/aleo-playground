import { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { useWallet, WalletProvider } from "@demox-labs/aleo-wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui"
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo"
import { DecryptPermission, WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base"
import './App.css'
import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"
import { useAccount, useConnect, useDisconnect } from '@puzzlehq/sdk'
import { ProgramRecords } from '@/components/ProgramRecords'

const shortenAddress = (address: string) => {
  const length = 5
  if (address.length < length * 2) return address
  return `${address.slice(0, length + 'aleo1'.length)}...${address.slice(
    address.length - length,
    address.length,
  )}`
}

const programName = 'credits.aleo'

const programId = 'iou_token_v001.aleo'

function App() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { account } = useAccount()

  return (
    <Wallet>
      <div>
        <h2>Puzzle SDK</h2>
        {!account && <button onClick={connect}>Connect</button>}
        {account && <>{shortenAddress(account.address)}
          <button onClick={disconnect}>Disconnect</button>
        </>}
        <ProgramRecords programId={programId} />
        <ProgramRecords programId="credits.aleo" />
      </div>
      <hr />
      <div>
        <h2>Leo Wallet SDK</h2>
        <WalletMultiButton />
        <AleoCredits />
      </div>
    </Wallet>
  )
}

export default App

const AleoCredits: FC = () => {
  const { connected, requestRecords, publicKey } = useWallet()
  const [records, setRecords] = useState<Record<string, unknown>[] | null>(null)

  const onClick = useCallback(() => {
    setRecords(null)

    if (publicKey && requestRecords) {
      requestRecords?.(programName).then((records) => {
        console.log('records?', records)
        setRecords(records)
      }).catch((err) => {
        console.log('error?', err)
      })
    }
  }, [publicKey, requestRecords])

  return <div>
    <button disabled={!connected} onClick={onClick}>Get Records</button>
    <div>
      {!!records && <pre style={
        {
          textAlign: 'left',
        }
      }><code>{JSON.stringify({ records }, null, 2)}</code></pre>}
    </div>
  </div>
}

export const Wallet: FC<{ children: ReactNode }> = ({ children }) => {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Leo Demo App",
      }),
    ],
    [],
  )

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.UponRequest}
      network={WalletAdapterNetwork.Testnet}
      autoConnect
    >
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  )
}