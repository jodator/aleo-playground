import { NavLink, NavLinkProps, Outlet } from 'react-router-dom'

const baseButtonClass = `bg-blue-500 hover:bg-blue-700 disabled:bg-neutral-700 text-white font-bold py-1 px-2 rounded `
const getLinkClassName: NavLinkProps['className'] = ({ isActive }) => `${baseButtonClass}${isActive ? 'border-blue-800' : ''}`

export function Layout() {
  return <div>
    <div className="container md mx-auto">
      <h1 className="my-4 text-4xl font-extrabold text-orange-400">Aleo playground</h1>
      <div className="flex mt-4 gap-2 mb-8">
        <NavLink to="/aleo-playground" className={baseButtonClass}>Home</NavLink>
        <NavLink to="/aleo-playground/puzzle-wallet" className={getLinkClassName}>Puzzle Wallet</NavLink>
        <NavLink to="/aleo-playground/leo-wallet" className={getLinkClassName}>Leo Wallet</NavLink>
      </div>
      <Outlet />
    </div>
  </div>
}