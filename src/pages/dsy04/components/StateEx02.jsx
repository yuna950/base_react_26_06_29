import { useState } from "react";

export default function StateEx02() {
  const [count, setCount] = useState(1);
  const price = 12000;
  const totalPrice = count * price;
  const handlePlus = () => setCount((prev) => prev + 1);
  const handleMinus = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  //   조건 걸기 위해서 prev사용
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-64 text-center space-y-4">
        <h1 className="text-lg font-bold">상품 수량</h1>
        {/* 수량 */}
        <div className="text-3xl font-bold">{count}</div>

        {/* 버튼 */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={handlePlus}
            className="px-4 py-3 bg-blue-300 text-white rounded hover:bg-blue-500 transition cursor-pointer active:scale-95"
          >
            +
          </button>
          <button
            onClick={handleMinus}
            className="px-4 py-3 bg-red-300 text-white rounded hover:bg-red-500 transition cursor-pointer active:scale-95"
          >
            -
          </button>
        </div>

        {/* 가격  */}
        <div className="text-gray-700 opacity-70">
          단가 : {price.toLocaleString()}원
        </div>
        {/* toLocaleString = 숫자 세자리마다 콤마 찍어줌 */}

        <div className="text-xl font-bold text-green-500">
          총 {totalPrice.toLocaleString()} 원
        </div>
      </div>
    </div>
  );
}
