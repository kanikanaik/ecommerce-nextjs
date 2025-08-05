import Image from "next/image";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <div className="bg-[#F2F0F1] grid grid-cols-2">
        {/* <Image src="/rectangle2.png" width={1400} height={550} alt="Icon" /> */}
        <div className="ml-28 p-14">
          <p className="text-6xl font-bold font-[integralcf]">
            FIND CLOTHES <br></br>THAT MATCHES <br></br> YOUR STYLE
          </p>
          <p className="font-light text-gray-900 py-4 w-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white px-20 rounded-full py-4">
            Shop Now
          </button>

          <div className="grid grid-cols-3 p-5 py-8">
            <div>
              <p className=" font-[integralcf] text-3xl">200&#x2b;</p>
              <p className="font-light text-gray-900 py-1">
                International Brands
              </p>
            </div>
            <div>
              <p className=" font-bold font-[integralcf] text-3xl">
                2,000 &#x2b;
              </p>
              <p className="font-light text-gray-900 py-1">
                High Quality Products
              </p>
            </div>
            <div>
              <p className=" font-bold font-[integralcf] text-3xl">
                30,000 &#x2b;
              </p>
              <p className="font-light text-gray-900 py-1">Happy Customers</p>
            </div>
          </div>
        </div>
        <div>
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

      <div className="bg-black text-white p-6 text-3xl font-[integralcf] flex gap-52">
        <p>Versace</p>
        <p>ZARA</p>
        <p>GUCCI</p>
        <p>PRADA</p>
        <p>Calvien Klein</p>
      </div>

      <div className="text-center font-[integralcf] text-5xl p-14">
        <p>NEW ARRIVALS</p>
      </div>

      <div className="md:grid md:grid-cols-4 grid grid-rows-1  px-28 p-2">
        <div>
          <Image alt="" src="/tshirt1.png" height={300} width={300} />
          <p className="font-bold p-2">T-Shirt with tape details</p>
          <div className="flex gap-3">
            <Image src="/star.png" alt="" height={40} width={100} />
            <p>4.5/5</p>
          </div>

          <p className="font-bold">$120</p>
        </div>
        <div>
          <Image alt="" src="/tshirt2.png" height={300} width={300} />
          <p className="font-bold p-2">T-Shirt with tape details</p>
          <div className="flex gap-3">
            <Image src="/star.png" alt="" height={40} width={100} />
            <p>4.5/5</p>
          </div>

          <p className="font-bold">$120</p>
        </div>
        <div>
          <Image alt="" src="/tshirt3.png" height={300} width={300} />
          <p className="font-bold p-2">T-Shirt with tape details</p>
          <div className="flex gap-3">
            <Image src="/star.png" alt="" height={40} width={100} />
            <p>4.5/5</p>
          </div>

          <p className="font-bold">$120</p>
        </div>
        <div>
          <Image alt="" src="/tshirt4.png" height={300} width={300} />
          <p className="font-bold p-2">T-Shirt with tape details</p>
          <div className="flex gap-3">
            <Image src="/star.png" alt="" height={40} width={100} />
            <p>4.5/5</p>
          </div>

          <p className="font-bold">$120</p>
        </div>
      </div>
    </div>
  );
}
