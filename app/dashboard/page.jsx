'use client'
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function DasboardPage() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-center items-center mt-24">
      <h1 className="font-oswald justify-center items-center text-4xl">This is your Dashboard {session?.user?.name}</h1>
      <button onClick={() => signOut({ callbackUrl: "/" })}>fuck me</button>
    </div>
  )
}