'use client'

import { useSession } from "next-auth/react"

export default function Dashboard(){

  const {data:session}=useSession();

  return(
    <>
    <header className="bg-white m-4 p-4 rounded-lg text-xl font-viga ">
      <p>What are you thinking Today {session?.user?.name}</p>
    </header>
    <main>
      <section className="flex flex-wrap">
      <div className="bg-white m-2 p-10">NOTE 1</div>
      <div className="bg-white m-2 p-10">NOTE 1</div>
      <div className="bg-white m-2 p-10">NOTE 1</div>
      <div className="bg-white m-2 p-10">NOTE 1</div>


      </section>
    </main>
    </>
  )
}