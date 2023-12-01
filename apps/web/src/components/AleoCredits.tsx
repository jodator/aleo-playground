import { useAccount, useBalance } from '@puzzlehq/sdk'
import { ReactNode, useMemo } from 'react'

export function AleoCredits() {
  const { account } = useAccount()
  const { balances, loading } = useBalance()

  const total = useMemo(() => {
    return (balances ?? []).reduce((acc, balance) => {
      return {
        public: acc.public + balance.public,
        private: acc.private + balance.private,
      }
    }, { public: 0, private: 0 })
  }, [JSON.stringify(balances)])

  if (!account) return (
    <Wrapper>
      Not connected
    </Wrapper>
  )

  if (loading) return (
    <Wrapper>
      Loading...
    </Wrapper>
  )

  return (
    <Wrapper>
      <span>Public: <strong>{total.public}</strong></span>
      <span className="mx-2 border-r-orange-300 border-r-2" />
      <span>Private: <strong>{total.private}</strong></span>
    </Wrapper>
  )
}

const Wrapper = ({ children }: { children: ReactNode }) => (<div className="justify-end flex p-2 text-orange-100 text-sm">{children}</div>)