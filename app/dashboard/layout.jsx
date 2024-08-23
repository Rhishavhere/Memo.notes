'use client'


import { signOut } from "next-auth/react";

// import { Data } from "../Utils/Fetch";
// import { Addtask } from "../Utils/Add";
// import { Connection } from "../Utils/checkuser";


import Panel from "@/components/Panel";
import Header from "@/components/dash/Header";

export default function DashboardPage({ session, children }) {

  // const { data: session } = useSession();

  // Connection(session?.user?.name);
  // const temp = async () => {
  //   let p = await Data(session?.user?.name);
  //   Addtask("test", session?.user?.name);
  // };



  return (
    <>
      <Header />
      <div id="dashboard-body" className="flex justify-between overflow-hidden">
        <section className="flex-[1]">
          <Panel />
        </section>

        <main className="flex-[6]">
          {children}
        </main>

      </div>
    </>
  )
}