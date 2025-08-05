import Image from "next/image";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

export default function Project() {
  return (
    <div>
      <TopBar />
      <NavBar />

      <div className="flex pt-32 px-3 p-3">
        <p className="font-light md:ml-44">Home &gt; Shop &gt; Men &gt; </p>
        <p>&nbsp; Tshirts </p>
      </div>

      <div className="p-3 md:grid grid-cols-2">
        <div className="md:ml-44">
          <Image alt="" src="/image 1.png" height={530} width={400} />
        </div>
        <div className="grid grid-cols-3 md:grid-flow-col grid-rows-1 p-3 gap-2">
          <div>
            <Image alt="" src="/image 2.png" height={150} width={150} />
          </div>

          <div>
            <Image alt="" src="/image 5.png" height={150} width={150} />
          </div>
          <div>
            <Image alt="" src="/image 6.png" height={150} width={150} />
          </div>
        </div>
        <p className="font-bold font-[integralcf] p-2">
          T-Shirt with tape details
        </p>
        <div className="flex gap-3">
          <Image src="/star.png" alt="" height={40} width={100} />
          <p>4.5/5</p>
        </div>

        <p className="font-bold">$120</p>
      </div>
    </div>
  );
}
