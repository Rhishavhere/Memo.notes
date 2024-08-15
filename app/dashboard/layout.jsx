'use client'

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Data } from "../Utils/Fetch";
import { Addtask } from "../Utils/Add";
import { Connection } from "../Utils/checkuser";


export default function DasboardPage({ children }) {
  const { data: session } = useSession();

  Connection(session?.user?.name);
  const temp = async () => {
    let p = await Data(session?.user?.name);
    Addtask("test", session?.user?.name);
  };



  return (
    <body className="flex justify-between bg-black">
      <nav>
        <div>Welcome {session?.user?.name}</div>
        <div>Your Categories</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </nav>
      <main>
        {children}
      </main>
      <section>
        <div>AI Chat</div>
        <div>Other Tools</div>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
      </section>
    </body>
  )
}