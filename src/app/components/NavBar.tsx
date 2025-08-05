import Image from "next/image";
import { ShoppingCart, CircleUserRound, Menu, Search } from "lucide-react";

export default function NavBar() {
  return (
    <div className="fixed top-8 bg-white  w-full text-black flex gap-9 py-3 lg:py-5 border-b-2 border-[#F2F0F1]">
      <div className="md:hidden p-2 ">
        <Menu size={28} />
      </div>

      <p className="font-bold font-[integralcf] text-2xl md:ml-44">KUKS.CO</p>
      <div className="md:flex gap-8 hidden">
        {" "}
        <button>Shop </button>
        <button>On Sale</button>
        <button>New Arrivals</button>
        <button>Brands</button>
        <button className="bg-gray-100 rounded-full w-[35vw] h-10 px-4 flex py-2 gap-3">
          <Image src="/frame.svg" width={30} height={30} alt="Icon" />
          <input placeholder="Search for Products..." />
        </button>
      </div>

      {/* <Search className="block md:hidden" size={28}/> */}
      <ShoppingCart size={28} />
      <CircleUserRound size={28} />
    </div>
  );
}
