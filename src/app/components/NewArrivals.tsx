import Image from "next/image";
export default function NewArrival() {
  return (
    <div>
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
      <div className="flex justify-center p-7 ">
        <button className="font-satoshi border border-gray-400 text-xl p-3 rounded-full px-10">
          View All
        </button>
      </div>
    </div>
  );
}
