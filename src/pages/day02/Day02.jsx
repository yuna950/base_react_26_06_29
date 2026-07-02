// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Section_1 from "./components/Section_1";
// import Section_2 from "./components/Section_2";
// import Intro from "./components/Intro";
import Contents_2 from "./components/Contents_2";

export default function Day02() {
  return (
    <div>
      {/* <Header />
      <hr />

      <Section_1 />
      <Section_2 />
      <hr />

      <Footer /> */}

      {/* ------------------- */}

      {/* <div>
        <h2>자기소개</h2>
        <p>이름 : 전소희</p>
        <p>나이 : 23살</p>
      </div>

      <div>
        <h2>자기소개</h2>
        <p>이름 : 정윤아</p>
        <p>나이 : 23살</p>
      </div>

      <div>
        <h2>자기소개</h2>
        <p>이름 : 박소희</p>
        <p>나이 : 22살</p>
      </div> */}

      {/* ------------------- */}

      {/* <Intro name="박소희" age="22" hobby="잠자기" />
      <Intro name="전소희" age="23" hobby="술" />
      <Intro name="정윤아" age="23" hobby="누워있기" /> */}
      {/* => 컴포넌트에 넘겨주는 변수를 props라고 함
      => props는 객체로 반환함 (props명은 자유롭게 지정 가능)*/}

      {/* ------------------- */}

      {/* *문제
      => 컨텐츠 컴포넌트 제작
      => 컨텐츠 내부엔 이름, 음식명, 사이드 메뉴  */}

      <Contents_2 name="전소희" food="초밥" sideMenu="사케" />
      <Contents_2 name="정윤아" food="치킨" sideMenu="소주" />
      <Contents_2 name="박소희" food="마라탕" sideMenu="꿔바로우" />
    </div>
  );
}
