import { WalletModalProvider, WalletMultiButton } from '@demox-labs/aleo-wallet-adapter-reactui'
import { FC, ReactNode, useMemo } from 'react'
import { WalletProvider } from '@demox-labs/aleo-wallet-adapter-react'
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo'
import { DecryptPermission, WalletAdapterNetwork } from '@demox-labs/aleo-wallet-adapter-base'
import { AleoRecords } from '@/components/AleoRecords.tsx'

export function LeoWalletPlayground() {
  return (
    <Wallet>
      <div>
        <div className="flex mt-4 justify-end">
          <WalletMultiButton />
        </div>
        <AleoRecords programId="iou_token_v001.aleo" />
        <AleoRecords programId="credits.aleo" />
      </div>
    </Wallet>
  )
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
      decryptPermission={DecryptPermission.OnChainHistory}
      network={WalletAdapterNetwork.Testnet}
      programs={['iou_token_v001.aleo', 'credits.aleo']}
      autoConnect
    >
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  )
}
