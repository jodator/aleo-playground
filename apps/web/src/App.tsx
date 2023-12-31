import "@demox-labs/aleo-wallet-adapter-reactui/styles.css"

import { PuzzleWalletPlayground } from '@/components/Puzzle/PuzzleWalletPlayground.tsx'
import { LeoWalletPlayground } from '@/components/LeoWallet/LeoWalletPlayground.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouteObject, useRoutes } from 'react-router-dom'
import { Layout } from '@/components/Layout.tsx'
import { Home } from '@/components/Home.tsx'

const queryClient = new QueryClient()

const router: RouteObject[] = [
  {
    path: "/aleo-playground/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "puzzle-wallet",
        element: <PuzzleWalletPlayground />,
      },
      {
        path: "leo-wallet",
        element: <LeoWalletPlayground />,
      },
    ],
  },
]

function App() {
  const element = useRoutes(router)

  return (
    <QueryClientProvider client={queryClient}>
      {element}
    </QueryClientProvider>
  )
}

export default App

