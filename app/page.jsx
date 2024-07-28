import { cn } from "@/lib/utils";
import GridPattern from "@/components/GridPattern";

import Header from "@/components/Header";

export default function Home() {
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
          "inset-x-0 inset-y-[-30%] h-[200%] opacity-25 -z-50",
        )}
      />
      <Header/>
    <main className="flex min-h-screen flex-col items-center p-24">
        <p className="font-anton text-6xl m-2">
          BORED OF TAKING NOTES ?
        </p>
        <p className="font-aclonica text-8xl mt-20">
          Introducing MEMO
        </p>
        <p className="font-poppins text-xl mt-5">
          Not the notes app you need but the one <span className="font-anton"> you want !</span>
        </p>
        
    </main>
    </>
  );
}
