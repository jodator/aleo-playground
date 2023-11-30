import { FC, ReactNode, useMemo } from 'react'
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui"
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo"
import { DecryptPermission, WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base"
import './App.css'
import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"

function App() {
  return (
    <Wallet>
      <WalletMultiButton />
    </Wallet>
  )
}

export default App

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