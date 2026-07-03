import { IoPause } from "react-icons/io5";
import { HiFastForward } from "react-icons/hi";
import { FaVolumeLow } from "react-icons/fa6";
import { IoVolumeHigh } from "react-icons/io5";
import { Podcast } from "lucide-react";

export default function Musicui() {
  return (
    <div className="bg-[#6a696e] w-[350px] p-5 rounded-3xl m-auto mt-[50px] space-y-5 shadow-2xl">
      <div className=" h-[300px] bg-gray-100 rounded-2xl "></div>
      {/* img */}

      <div className="flex justify-between">
        <p className="text-gray-100 opacity-50 text-[12px] ">iPhone</p>
        <div className="mt-[20px] mb-[20px] ">
          <Podcast color="white" />
        </div>
      </div>
      {/*  */}

      <div className="h-1 w-[100%] relative">
        <div className="h-1 w-[100%] bg-gray-100 opacity-50 rounded-2xl transform translate-y-0.5"></div>
        <div className="flex items-center absolute top-0 left-0">
          <div className="h-1 w-[150px] bg-white rounded-2xl "></div>
          <div className="w-2 h-2 bg-white rounded-2xl transform -translate-x-0.5"></div>
        </div>
        <div className="flex justify-between text-gray-100 opacity-50 text-[12px] pt-1.5 ">
          <p>1:53</p>
          <p>-1:20</p>
        </div>
      </div>
      {/* 재생바 */}

      <div className="flex justify-center items-center space-x-[50px] p-5 ">
        <div className="transform rotate-y-180">
          <HiFastForward color="white" size="2em" />
        </div>
        <div>
          <IoPause color="white" size="2.5em" />
        </div>
        <div>
          <HiFastForward color="white" size="2em" />
        </div>
      </div>
      {/* 재생 버튼 */}

      <div className="flex justify-center items-center space-x-4 ">
        <div className="">
          <FaVolumeLow color="gray" size="1em" />
        </div>

        <div className="h-1 w-[70%] relative">
          <div className="h-1 w-[100%] bg-gray-100 opacity-50 rounded-2xl"></div>

          <div className="flex items-center absolute top-0 left-0 transform -translate-y-1.5">
            <div className="h-1 w-[150px] bg-white rounded-2xl "></div>
            <div className="w-4 h-4 bg-white rounded-2xl transform -translate-x-0.5"></div>
          </div>
        </div>

        <div className="">
          <IoVolumeHigh color="gray" size="1.3em" />
        </div>
      </div>
    </div>
  );
}
