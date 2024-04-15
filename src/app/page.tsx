import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-8">
      <Header />
      <div className="grow flex flex-col items-center gap-4 justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Grab the ultimate sale on bid
        </h1>
        <div>
        <Button className="text-xl" asChild>
          <Link href="/">Explore Market Place</Link>
        </Button>
            
        </div>
      </div>
    </main>
  );
}
