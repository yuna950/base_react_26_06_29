import { useState } from "react";

export default function Ex02() {
  const [darkmode, setDarkmode] = useState(false);

  const darkHandler = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-100 h-100 bg-gray-200 rounded-4xl shadow-2xl flex items-center justify-center flex-col">
        <div className="text-7xl mb-9">{darkmode ? "🌙" : "☀️"}</div>
        <button
          onClick={darkHandler}
          className="p-5 bg-gray-300 text-white rounded-2xl font-bold transform transition active:scale-95"
        >
          {darkmode ? "다크 모드" : "라이트 모드"}
        </button>
      </div>
    </div>
  );
}
