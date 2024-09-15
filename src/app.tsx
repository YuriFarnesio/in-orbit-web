import { Plus } from 'lucide-react'
import letsStart from './assets/lets-start-illustration.svg'
import logo from './assets/logo-in-orbit.svg'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />
      <p className="max-w-80 text-zinc-300 leading-relaxed text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <button
        type="button"
        className="flex items-center bg-violet-500 hover:bg-violet-600 text-sm font-medium tracking-tight text-violet-50 gap-2 rounded-lg py-2.5 px-4 transition"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  )
}
