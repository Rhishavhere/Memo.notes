'use client'

import { useSession } from "next-auth/react"

export default function Dashboard(){

  const {data:session}=useSession();

  return(
    <>
    <header className="bg-white m-6 mt-8 p-4 rounded-lg text-2xl font-viga ">
      <p className="text-purple-600">Welcome to your Memos, {session?.user?.name}</p>
    </header>
    <main className="border-2 border-black/50 h-[80vh] mt-10 ml-6 mr-6 rounded-xl p-6">
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