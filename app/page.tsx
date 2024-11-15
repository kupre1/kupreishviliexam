import { Icon, Icon1, Icon2, starts, starts1, Icon3, Icon4 } from "@/potos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[520px] bg-[#1A1A1A] w-full flex flex-col justify-center items-center m-auto p-[50px] gap-[30px]">
      <div className="min-w-[419px] h-[71px] flex flex-col justify-between ">
        <div className="text-[#999999] flex items-center gap-[4px] ">
          <Image src={Icon} width={24} height={24} alt="icon" />
          <p className="text-[18px] font-medium leading-7">Released Year</p>
        </div>
        <p className="text-white text-[20px] font-semibold leading-[30px] ">
          2022
        </p>
      </div>
      <div className="min-w-[419px]  flex flex-col justify-between gap-[10px]">
        <div className="text-[#999999] flex items-center gap-[4px] ">
          <Image src={Icon1} width={24} height={24} alt="icon" />
          <p className="text-[18px] font-medium leading-7">
            Available Languages
          </p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <div className="bg-black border border-gray-800 w-[90px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            English
          </div>
          <div className="bg-black border border-gray-800 w-[90px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            Hindi
          </div>
          <div className="bg-black border border-gray-800 w-[90px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            Tamil
          </div>
          <div className="bg-black border border-gray-800 w-[90px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            Telegu
          </div>
          <div className="bg-black border border-gray-800 w-[110px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            Kannada
          </div>
        </div>
      </div>
      <div className="min-w-[419px]  flex flex-col justify-between gap-2">
        <div className="text-[#999999] flex items-center gap-[4px] ">
          <Image src={Icon2} width={24} height={24} alt="icon" />
          <p className="text-[18px] font-medium leading-7">Ratings</p>
        </div>
        <div className="min-w-[419px]  flex justify-between gap-[10px]">
          <div className="w-[200px] h-[96px] bg-black border border-gray-800 py-4 pl-4 rounded-md ">
            <p className="text-[20px] font-semibold text-white  ">IMDb</p>
            <p>
              <Image src={starts} width={128} height={24} alt="icon" />
            </p>
          </div>
          <div className="w-[200px] h-[96px] bg-black border border-gray-800 py-4 pl-4 rounded-md">
            <p className="text-[20px] font-semibold text-white  ">Streamvibe</p>
            <p>
              <Image src={starts1} width={128} height={24} alt="icon" />
            </p>
          </div>
        </div>
      </div>
      <div className="min-w-[419px]  flex flex-col justify-between gap-[10px]">
        <div className="text-[#999999] flex items-center gap-[4px] ">
          <Image src={Icon3} width={24} height={24} alt="icon" />
          <p className="text-[18px] font-medium leading-7">Gernes</p>
        </div>
        <div className="flex  gap-[10px]">
          <div className="bg-black border border-gray-800 w-[101px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            Sci-Fi TV
          </div>
          <div className="bg-black border border-gray-800 w-[155px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            Teen TV Shows
          </div>
          <div className="bg-black border border-gray-800 w-[137px] h-[43px] text-white text-[18px] leading-7 flex justify-center items-center rounded-md">
            US TV Shows
          </div>
        </div>
      </div>
      <div className="min-w-[419px] gap-5 flex flex-col justify-between ">
        <div className="text-[#999999] flex items-center gap-[4px] ">
          <p className="text-[18px] font-medium leading-7">Director</p>
        </div>
        <div className="min-w-[419px]  flex justify-between gap-[10px]">
          <div className="w-[419px] h-[96px] bg-black border border-gray-800 py-4 pl-4 rounded-md flex gap-2  ">
            <Image src={Icon4} width={56} height={60} alt="icon" />
            <div className="flex flex-col justify-center ">
              <p className="font-medium leading-6 text-[18px] text-white">
                The Duffer Brothers
              </p>
              <p className="font-medium leading-6 text-[#999999]">From USA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[419px] gap-5 flex flex-col   justify-between ">
        <div className="text-[#999999] flex items-center gap-[4px] ">
          <p className="text-[18px] font-medium leading-7">Director</p>
        </div>
        <div className="min-w-[419px]  flex justify-between gap-[10px]">
          <div className="w-[419px] h-[96px] bg-black border border-gray-800 py-4 pl-4 rounded-md flex gap-2  ">
            <Image src={Icon4} width={56} height={60} alt="icon" />
            <div className="flex flex-col justify-center ">
              <p className="font-medium leading-6 text-[18px] text-white">
                The Duffer Brothers
              </p>
              <p className="font-medium leading-6 text-[#999999]">From USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
