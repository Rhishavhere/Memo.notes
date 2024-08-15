'use client'

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Data } from "../Utils/Fetch";
import { Addtask } from "../Utils/Add";
import { Connection } from "../Utils/checkuser";


export default function DasboardPage() {
  const { data: session } = useSession();

  Connection(session?.user?.name);
  const temp = async () => {
    let p = await Data(session?.user?.name);
    Addtask("test", session?.user?.name);
  };
  


  return (
    <>
      <motion.div className="flex justify-center items-center mt-24"
        initial={{ y: 40, opacity: 0 }}
        transition={{ type: "tween", delay: 0.4, duration: 0.38 }}
        animate={{ y: 0, opacity: 1 }}>
        <h1 className="font-oswald justify-center items-center text-4xl">This is your Dashboard {session?.user?.name}</h1>
      </motion.div>

      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
    </>
  )
}