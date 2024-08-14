'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/GridPattern";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";

import { useState } from "react";

export default function Home() {

  const { scrollY } = useScroll();
  const [loader, setLoader] = useState(false);

  const hoverRight = useTransform(scrollY, [0, 500], [390, 1500]);
  const hoverLeft = useTransform(scrollY, [0, 300], [590, 1000]);

  const { data: session } = useSession();
  const router = useRouter();

  const sign = async () => {
    setLoader(true);
    if (session && session.user) {
      router.push("/dashboard");
      return;
    }

    await signIn("google", { callbackUrl: "/dashboard" });
  };

  const loading = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
        stroke="#ffffff"
        strokeWidth="3.55556"
        strokeLinecap="round"
      />
    </svg>
  );


  return (<>
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
        "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] opacity-80 -z-50",
      )}
    />
    <Header />



    <main className="flex flex-col items-center p-32 relative mb-14">
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
           bg-white/30 hover:bg-white/50 transition ease-in-out duration-300"
          onClick={() => sign()}
        >
          {loader == true ? <div id="temp">{loading}</div> : "Log In"}
        </button>

      </div>

      <motion.div className="bg-orange-600/50 size-28 rounded-full absolute top-56 backdrop-invert z-10"
        style={{ right: hoverRight }}
      ></motion.div>
      <motion.div className="bg-red-600/50 size-10 rounded-full absolute top-36 backdrop-invert z-10"
        style={{ left: hoverLeft }}
      ></motion.div>

    </main>

    <Marquee className="text-4xl font-anton overflow-hidden autoFill:true p-3 border-y">
      <div className="mr-10">Why Memo ? </div>
      <div className="mr-10">Because it&apos;s cool & Fancy and productivity
        isn&apos;t your cup of tea anyways!
      </div>
    </Marquee>
  </>
  );
}
