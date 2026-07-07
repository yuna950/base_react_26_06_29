import { useState } from "react";
import { dataEx } from "../data/data";

export default function Ex02() {
  // 전체 클릭 -> 데이터 배열 전체 반환
  // 특정 탭 메뉴 클릭 -> 해당 탭 메뉴의 이름에 맞는 데이터를 필터링 하여 반환
  const [filter, setFilter] = useState("all");

  const filterList =
    filter === "all"
      ? dataEx
      : dataEx.filter((item) => item.category === filter);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200 space-y-4">
      {/* 버튼 */}
      <div className="flex gap-2">
        {dataEx.map((tabMenu) => (
          <button
            onClick={() => setFilter(tabMenu.filterName)}
            className={`
            px-3 
            py-1
            rounded
            ${filter === tabMenu.filterName ? "bg-red-500 text-white" : "bg-white text-black"}
            cursor-pointer
            `}
          >
            {tabMenu.title}
          </button>
        ))}
        {/* <button
          onClick={() => setFilter("all")}
          className={`
            px-3 
            py-1
            rounded
            ${filter === "all" ? "bg-red-500 text-white" : "bg-white text-black"}
            cursor-pointer
            `}
        >
          전체
        </button>

        <button
          onClick={() => setFilter("portal")}
          className={`
                px-3 
                py-1
                rounded
               ${filter === "portal" ? "bg-red-500 text-white" : "bg-white text-black"}
                cursor-pointer
            `}
        >
          포털
        </button>

        <button
          onClick={() => setFilter("video")}
          className={`
                px-3 
                py-1
                rounded
               ${filter === "video" ? "bg-red-500 text-white" : "bg-white text-black"}
                cursor-pointer
            `}
        >
          영상
        </button>

        <button
          onClick={() => setFilter("sns")}
          className={`
                px-3 
                py-1
                rounded
               ${filter === "sns" ? "bg-red-500 text-white" : "bg-white text-black"}
                cursor-pointer
            `}
        >
          sns
        </button> */}
      </div>

      {/* 컨텐츠 */}
      <div className="w-80 space-y-3">
        {filterList.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="block bg-white p-4 rounded-lg shadow cursor-pointer"
          >
            <h2 className="text-[24px] font-bold">{item.name}</h2>
            <p className="text-gray-500 mt-4">{item.disc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
