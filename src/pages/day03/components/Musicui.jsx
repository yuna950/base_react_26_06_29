import { Pause } from "lucide-react";
import { FastForward } from "lucide-react";
import { Volume1 } from "lucide-react";
import { Volume2 } from "lucide-react";
import { Podcast } from "lucide-react";

export default function Musicui() {
  return (
    <div className="bg-gray-600 w-[350px] p-5 rounded-2xl m-auto space-y-5">
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
        <div className="h-1 w-[100%] bg-gray-400 rounded-2xl transform translate-y-0.5"></div>
        <div className="flex items-center absolute top-0 left-0">
          <div className="h-1 w-[150px] bg-white rounded-2xl "></div>
          <div className="w-2 h-2 bg-white rounded-2xl transform -translate-x-0.5"></div>
        </div>
        <div className="flex justify-between text-gray-400 text-[12px] pt-1.5 ">
          <p>1:53</p>
          <p>-1:20</p>
        </div>
      </div>
      {/* 재생바 */}

      <div className="flex justify-center space-x-[50px]">
        <div className="transform rotate-x-180">
          <FastForward color="white" />
        </div>
        <div className="">
          <Pause color="white" />
        </div>
        <div className="">
          <FastForward color="white" />
        </div>
      </div>
    </div>
  );
}
