import { useQuery } from '@tanstack/react-query'
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react'

function getRPC() {
  return `https://aleo.obscura.build/v1/b5092785-9703-4206-846f-0691b8b46ac9`
}

function usePublicMapping(programId: string, mappingName: string, key: string | null) {
  return useQuery({
    queryKey: [programId, mappingName, key],
    enabled: !!key,
    queryFn: async () => {
      const response = await fetch(`${getRPC()}/testnet3/program/${programId}/mapping/${mappingName}/${key}`)
      return await response.json()
    },
  })
}

class LeoNumber {
  public value: number
  public visibility: 'public' | 'private'
  public decimal: string

  private constructor(value: number, visibility: "public" | "private", decimal: string) {
    this.value = value
    this.visibility = visibility
    this.decimal = decimal
  }

  static fromString(str: string): LeoNumber {
    const [value, visibility] = str.split('.')
    const [integer, decimal] = value.split('u')

    return new LeoNumber(parseInt(integer), visibility as 'public' | 'private', `u${decimal}`)
  }
}

export function MyDebt() {
  const { publicKey } = useWallet()
  const { data } = usePublicMapping('iou_token_v001.aleo', 'publicDebt', publicKey)

  return <div className="text-slate-500 flex align-middle">
    <span>My public debt: <strong className="text-white">{data ? LeoNumber.fromString(data).value : 0}</strong></span>
  </div>
}