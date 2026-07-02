export default function TailwindEx() {
  return (
    <>
      <div className="w-28 h-28 bg-green-300 mx-[20px]"></div>
      <div className="w-[100px] h-[100px] border border-green-700 m-auto"></div>
      {/* 정확한 수치를 넣고 싶으면 [숫자 단위] 넣으면 됨 */}
      <br />

      {/* -------------------------------------------------------------------- */}

      <div className="text-3xl font-black text-pink-700">글자 스타일</div>
      <br />

      {/* -------------------------------------------------------------------- */}

      <div className="w-[500px] bg-gray-300 flex justify-between items-center">
        <div className="w-[100px] h-[100px] 2xl bg-blue-300 flex items-center justify-center">
          컨텐츠1
        </div>
        <div className="w-[100px] h-[100px] 2xl bg-blue-300 flex items-center justify-center">
          컨텐츠2
        </div>
        <div className="w-[100px] h-[100px] 2xl bg-blue-300 flex items-center justify-center">
          컨텐츠3
        </div>
      </div>
      <br />

      {/* -------------------------------------------------------------------- */}

      <div className="w-[300px] h-[300px] bg-pink-300 hover:bg-blue-400 transition"></div>
    </>
  );
}
