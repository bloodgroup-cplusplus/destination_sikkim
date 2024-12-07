import Image from "next/image";
import background from "@/photos/background.jpeg";
//import { CountdownTimer } from "@/components/countdown-timer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-centry justify-center relative overflow-hidden">
      <Image src={background} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black bg-opactity-50" />
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Destination Sikkim
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-8">
          A travel agency coming for all your travel desires across Sikkim
        </h2>
        {/*<CountdownTimer
          targetDate={new Date(Date.now() + 30 * 24 * 24 * 60 * 1000)}
        />*/}
      </div>
    </main>
  );
}
