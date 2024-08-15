import Link from "next/link"
import Image from "next/image"

export default function Header(){
  return(
    <header className='flex justify-between items-center m-4 z-40'>
      <div className='flex justify-center items-center'>
        <Image className='m-3' src='SNlogo.svg' alt="" width={30} height={30} />
        <p className='text-xl text-white cursor-pointer'>
          Memo</p>
      </div>
      <nav className='flex gap-10 '>
        <p className='text-xl bg-transparent rounded-md p-1 pl-2 pr-2
        hover:bg-white/10 transition ease-in-out duration-500 cursor-pointer'>
          Home</p>
        <p className='text-xl bg-white/10 rounded-md p-1 pl-2 pr-2
        hover:bg-white/10 transition ease-in-out duration-500 cursor-pointer'>
          <Link href="/dashboard">Memos</Link></p>
        {/* <p className='hover:scale-125 transition ease-in-out duration-300'>
          Why Script Nest</p> */}
      </nav>
      <div className='flex justify-center items-center cursor-pointer'>
        <Image className='w-8' src='github.svg' alt="" width={30} height={30} />
        <p className='m-3 text-xl'>
          Connect Me</p>

      </div>
      <div>click on me</div>
    </header>
  )
}