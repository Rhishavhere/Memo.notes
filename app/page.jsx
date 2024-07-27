import { cn } from "@/lib/utils";
import GridPattern from "@/components/GridPattern";

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
          "inset-x-0 inset-y-[-30%] h-[200%] opacity-25",
        )}
      />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
    </>
  );
}
