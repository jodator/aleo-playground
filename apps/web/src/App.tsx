import { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { useWallet, WalletProvider } from "@demox-labs/aleo-wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui"
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo"
import { DecryptPermission, WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base"
import './App.css'
import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"

function App() {
  return (
    <Wallet>
      <WalletMultiButton />
      <AleoCredits />
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
      requestRecords?.('credits.aleo').then((records) => {
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