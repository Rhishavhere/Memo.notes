
import { useSession } from "next-auth/react"
import Link from "next/link";

export default function Panel(){

  const {data:session}=useSession();

  return(
    <nav className="bg-white/30 h-[100vh] overflow-hidden">
      <section className="flex flex-col border-b-2 border-black/50 mb-4 p-5">
        <p className="text-xl">
         {session?.user?.name}</p>
        <p className="text-sm text-slate-600">
          rhishh.me@gmail.com</p>
      </section>
      <section className="flex flex-col p-4 ">
        <button className="bg-purple-600 rounded-lg mb-2 text-slate-200 p-2 pl-10 pr-10 ">
         + New Project</button>
        <button className="bg-orange-300 rounded-lg mb-6">
          Add To-Do</button>
          <nav className="flex flex-col items-start gap-2 ">
            <button>search</button>
            <button><Link href="/">Home</Link></button>
            <button>Notes</button>
            <button>Tasks</button>
          </nav>
      </section>
    </nav>
  )
}