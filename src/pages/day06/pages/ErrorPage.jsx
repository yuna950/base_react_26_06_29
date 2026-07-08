import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-6xl mb-5 ">Error Page</h1>
      <div>
        <p className="mb-5">잘못된 경로입니다 홈으로 이동해주세요</p>
        <Link
          to={"/"}
          className="text-blue-500 border border-blue-500 px-3 py-1 rounded-2xl hover:bg-blue-500 hover:text-white"
        >
          홈으로 이동하기 &rarr;
        </Link>
      </div>
    </div>
  );
}
