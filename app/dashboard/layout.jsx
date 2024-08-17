'use client'

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Data } from "../Utils/Fetch";
import { Addtask } from "../Utils/Add";
import { Connection } from "../Utils/checkuser";
import Link from "next/link";

import Panel from "@/components/Panel";

export default function DasboardPage({ children }) {
  const { data: session } = useSession();

  Connection(session?.user?.name);
  const temp = async () => {
    let p = await Data(session?.user?.name);
    Addtask("test", session?.user?.name);
  };



  return (
    <body id="dashboard-body" className="flex justify-between">
      
        <Panel></Panel>
      
      <main>
        {children}
      </main>
      <section className="flex flex-col items-center">
        <div>AI Chat</div>
        <div>Other Tools</div>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
        <a href="http://localhost:3000">Home</a>
      </section>
    </body>
  )
}