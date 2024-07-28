'use client';
import { motion,useScroll,useTransform } from "framer-motion";


import { cn } from "@/lib/utils";
import GridPattern from "@/components/GridPattern";


import Header from "@/components/Header";
import ScrollText from "@/components/ScrollText";


export default function Home() {

  const {scrollY}=useScroll();

  const hoverRight=useTransform(scrollY,[0,500],[390,1500]);
  const hoverLeft=useTransform(scrollY,[0,300],[590,1000]);
  // const hoverSize=useTransform(scrollY,[0,500],[40,100]);

  return ( <>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [8, 10],
          [12, 15],
          // [15, 10],
          [10, 15],
          // [15, 10],
          [10, 15],
          [15, 12],
        ]}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] opacity-50 -z-50",
        )}
      />
      <Header/>

      

      <main className="flex min-h-screen flex-col items-center p-24 relative">
        <p className="font-anton text-6xl m-2">
          BORED OF TAKING NOTES ?
        </p>
        <p className="font-aclonica text-8xl mt-20">
          Introducing MEMO
        </p>
        <p className="font-poppins text-xl mt-5">
          Not the notes app you need but the one <span className="font-anton"> you deserve !</span>
        </p>

        <div className="flex mt-20 items-center gap-6 font-noto text-xl">
          <button className="bg-orange-600 rounded-xl p-2 pl-4 pr-4 outline-none
          hover:bg-orange-500 transition-all ease-in-out duration-300">
            Get Started</button>
            <button className="rounded-xl p-2 pl-4 pr-4 outline-none
           bg-white/30 hover:bg-white/50 transition ease-in-out duration-300">
            Log In</button>
        </div>

        <motion.div className="bg-orange-600/50 size-28 rounded-full absolute top-48 backdrop-invert z-10"
        style={{right:hoverRight}}
        ></motion.div>
        <motion.div className="bg-red-600/50 size-10 rounded-full absolute top-28 backdrop-invert z-10"
        style={{left:hoverLeft}}
        ></motion.div>

        <ScrollText/>
        
    </main>
    </>
  );
}
