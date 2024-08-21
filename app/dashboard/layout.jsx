'use client'


import { signOut } from "next-auth/react";

// import { Data } from "../Utils/Fetch";
// import { Addtask } from "../Utils/Add";
// import { Connection } from "../Utils/checkuser";


import Panel from "@/components/Panel";
import PanelOther from "@/components/PanelOther";

export default function DashboardPage({ session, children }) {
  
  // const { data: session } = useSession();

  // Connection(session?.user?.name);
  // const temp = async () => {
  //   let p = await Data(session?.user?.name);
  //   Addtask("test", session?.user?.name);
  // };



  return (
    <div id="dashboard-body" className="flex justify-between overflow-hidden">
      <section className="flex-[1]">
        <Panel/>
      </section>
      
      <main className="flex-[6]">
        {children}
      </main>

      <section className="flex-[2]">
        <PanelOther/>
      </section>

    </div>
  )
}