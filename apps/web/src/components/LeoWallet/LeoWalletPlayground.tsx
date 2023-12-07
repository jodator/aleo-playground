import { WalletModalProvider, WalletMultiButton } from '@demox-labs/aleo-wallet-adapter-reactui'
import { FC, ReactNode, useMemo } from 'react'
import { WalletProvider } from '@demox-labs/aleo-wallet-adapter-react'
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo'
import { DecryptPermission, WalletAdapterNetwork } from '@demox-labs/aleo-wallet-adapter-base'
import { AleoRecords } from '@/components/LeoWallet/AleoRecords.tsx'
import { MyDebt } from '@/components/LeoWallet/MyDebt.tsx'
import { Debts } from '@/components/LeoWallet/Debts.tsx'



export function LeoWalletPlayground() {
  return (
    <Wallet>
      <div>
        <div className="flex mt-4 justify-end">
          <WalletMultiButton />
        </div>
        <div className="flex mb-4">
          <MyDebt />
        </div>
        <Debts />
        <AleoRecords programId="iou_token_v001.aleo" />
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
