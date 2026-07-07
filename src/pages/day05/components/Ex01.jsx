// *문제
// => 배열 데이터의 값을 사용하여 링크를 클릭하면 해당 페이지로 이동되게 만들기
// => 배열 제작 : 고유값, 타이틀, 설명, 링크
// => 배열 요소는 5개 이상
// ex) sns 사이트 모음 1. 네이버 2. 인스타 3. 유튜브 4. 틱톡 5. 페이스북 (클릭하면 해당 링크로 보내지게)

import datas from "../data/data";

export default function Ex01() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <ul className="space-y-[15px] p-10">
        {datas.map((data) => (
          <li
            key={data.id}
            className="w-[300px]  bg-gray-100 hover:bg-gray-300 transition p-4 rounded-lg border border-gray-300 text-gray active:scale-95 text-center  "
          >
            <a
              href={data.url}
              className="space-y-5 flex flex-col justify-center items-center"
            >
              <h2 className="font-bold text-2xl">{data.name}</h2>
              <p>{data.disc}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
