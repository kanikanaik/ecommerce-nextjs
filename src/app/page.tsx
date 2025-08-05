import Image from "next/image";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import { Plus } from "lucide-react";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import Browse from "./components/Browse";
export default function Home() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />

      <div className="bg-black text-white p-6 font-[integralcf]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-between items-center gap-6 max-w-7xl mx-auto">
          <Image src="/versace.png" alt="Versace" height={34} width={167} />
          <Image src="/zara.png" alt="Zara" height={38} width={91} />
          <Image src="/gucci.png" alt="Gucci" height={36} width={156} />
          <Image src="/prada.png" alt="Prada" height={32} width={194} />
          <Image src="/calvien.png" alt="Calvien" height={34} width={206} />
        </div>
      </div>

      <NewArrival />
      <TopSelling />
      <Browse />
    </div>
  );
}
