import { useState } from "react";

export default function Ex01() {
  const [like, setLike] = useState(false);
  const onLike = () => {
    //   setLike((prev) => (like ? false : true));
    setLike((prev) => !prev);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-100 ">
      <div className="w-50 h-50 bg-white shadow-2xl flex flex-col items-center justify-center rounded-2xl">
        <button
          onClick={onLike}
          className="text-6xl mb-5 transition transform hover:scale-110 active:scale-95"
        >
          {like ? "❤" : "💖"}
        </button>
        <h3 className="font-bold text-2xl">
          {like ? "좋아요 안눌림" : "좋아요 눌림"}
        </h3>
      </div>
    </div>
  );
}
