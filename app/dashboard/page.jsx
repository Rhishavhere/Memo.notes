'use client'

import { useSession } from "next-auth/react"
import NotesPage from "@/components/NotesPage";

export default function Dashboard(){

  const {data:session}=useSession();

  return(
    <>
      <NotesPage></NotesPage>
    </>
  )
}