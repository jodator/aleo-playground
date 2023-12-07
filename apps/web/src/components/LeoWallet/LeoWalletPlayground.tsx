import { WalletModalProvider, WalletMultiButton } from '@demox-labs/aleo-wallet-adapter-reactui'
import { FC, ReactNode, useCallback, useMemo } from 'react'
import { useWallet, WalletProvider } from '@demox-labs/aleo-wallet-adapter-react'
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo'
import { DecryptPermission, Transaction, WalletAdapterNetwork } from '@demox-labs/aleo-wallet-adapter-base'
import { AleoRecords } from '@/components/LeoWallet/AleoRecords.tsx'
import { MyDebt } from '@/components/LeoWallet/MyDebt.tsx'
import { Debts } from '@/components/LeoWallet/Debts.tsx'

function CreateDebt() {
  const { publicKey, requestTransaction } = useWallet()

  const onClick = useCallback(async () => {
    if (!publicKey || !requestTransaction) return

    const owner = prompt('Enter owner address')
    const amount = prompt('Enter amount')

    if (!owner || !amount) return

    const inputs = [owner, amount]
    const fee = 4_000_000
    const aleoTransaction = Transaction.createTransaction(
      publicKey,
      WalletAdapterNetwork.Testnet,
      'iou_token_v001.aleo',
      'create',
      inputs,
      fee,
    )

    await requestTransaction(aleoTransaction)
  }, [publicKey, requestTransaction])

  return <button disabled={!publicKey} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                 onClick={onClick}>IOU</button>
}

export function LeoWalletPlayground() {
  return (
    <Wallet>
      <div>
        <div className="flex mt-4 justify-end">
          <WalletMultiButton />
        </div>
        <div className="flex mb-4 gap-2">
          <MyDebt />
          <CreateDebt />
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
