import { useBalance } from '@puzzlehq/sdk'

export function AleoCredits() {
  const { balances } = useBalance()

  const total = balances.reduce((acc, balance) => {
    return {
      public: acc.public + balance.public,
      private: acc.private + balance.private,
    }
  }, { public: 0, private: 0 })

  return (
    <div className="justify-end flex p-2 text-orange-100 text-sm">
      <span>Public: <strong>{total.public}</strong></span>
      <span className="mx-2 border-r-orange-300 border-r-2" />
      <span>Private: <strong>{total.private}</strong></span>
    </div>
  )
}