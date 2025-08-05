import Image from "next/image";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import { Plus } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-28 md:pt-36 bg-[#F2F0F1] grid grid-cols-1 md:grid-cols-2">
      <div className="md:ml-16 lg:ml-28 md:p-10 lg:p-14 p-4">
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold font-[integralcf] leading-tight">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </p>
        <p className="font-light text-gray-900 py-4 text-sm md:text-lg">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-black text-white lg:px-10 px-34 rounded-full py-3 md:py-4 text-base md:text-lg">
            Shop Now
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8 text-center">
          <div>
            <p className="font-[integralcf] text-xl md:text-3xl">200&#x2b;</p>
            <p className="font-light text-gray-900 text-sm md:text-base">
              International Brands
            </p>
          </div>
          <div>
            <p className="font-bold font-[integralcf] text-xl md:text-3xl">
              2,000&#x2b;
            </p>
            <p className="font-light text-gray-900 text-sm md:text-base">
              High Quality Products
            </p>
          </div>
          <div>
            <p className="font-bold font-[integralcf] text-xl md:text-3xl">
              30,000&#x2b;
            </p>
            <p className="font-light text-gray-900 text-sm md:text-base">
              Happy Customers
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Image
          className="absolute right-44 top-52"
          src="/Vector.svg"
          alt=""
          width={100}
          height={100}
        />
        <Image src="/model.png" alt="" width={600} height={600} />
        <Image
          className="absolute bottom-72 "
          src="/Vector.svg"
          alt=""
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}
