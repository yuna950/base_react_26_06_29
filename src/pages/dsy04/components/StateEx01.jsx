import { useState } from "react";

export default function StateEx01() {
  //   let num = 0;
  //   const plusHandler = () => {
  //     console.log(num);
  //     return num++;
  //   };

  const [num, setNum] = useState(0);
  //   => num = 0과 같음
  //   => 리액트 상태 관리를 해줌
  //   => 컴포넌트 내부에서 관리하는 값
  //   => hook(앞에 use가 붙으면 hook)

  //   const plusHandler = () => {
  //     setNum(num + 1);
  //   };

  //   const minusHandler = () => {
  //     setNum(num - 1);

  //   ----------------------------------------------

  //   const plusHandler = () => setNum(num + 1);
  //   const minusHandler = () => setNum(num - 1);

  //   ----------------------------------------------

  const plusHandler = () => setNum((prev) => prev + 1);
  const minusHandler = () => setNum((prev) => prev - 1);
  // 이전값 => 변경값

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center gap-4 w-44">
        {/* 숫자 */}
        <div className="text-4xl font-bold text-gray-800">{num}</div>

        {/* 버튼영역 */}
        <div className="flex  gap-3">
          <button
            onClick={plusHandler}
            className="flex px-6 py-2 font-bold text-white bg-blue-400 rounded-lg hover:bg-blue-600 transition cursor-pointer active:scale-95"
          >
            +
          </button>
          <button
            onClick={minusHandler}
            className="flex px-6 py-2 font-bold text-white bg-red-400 rounded-lg hover:bg-red-600 transition cursor-pointer active:scale-95"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
