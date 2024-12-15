import Image from "next/image";
import background from "@/photos/background.jpg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-centry justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white bg-opactity-50" />
      <Image
        src={background}
        alt="Travel Spots"
        fill
        className="object-cover"
        priority
      />
      <div className="z-40 text-center px-9 py-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-300 antialiased mb-4">
          Destination Sikkim
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text--500 text-blue-300 antialiased placeholder-slate-900 text-center   font-extrabold mb-8">
          A travel agency coming for all your travel desires across Sikkim
        </h2>
      </div>
    </main>
  );
}
