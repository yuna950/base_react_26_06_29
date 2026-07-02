import React from "react";

export default function BaseEx03() {
  return (
    // <div>
    //   <h2>두개 이상의 태그는 반드시 부모 태그로 감싸줄 것</h2>
    //   <div>태그 하나 더 제작</div>
    // </div>

    // <>
    //   <h2>빈 태그가 싫으면 fragment를 사용할 수 있음</h2>
    //   <h2>엑스트라 태그 없이 불러올 수 있음</h2>
    // </>

    <React.Fragment>
      <h2>빈 태그가 싫으면 fragment를 사용할 수 있음</h2>
      <h2>클래스를 넣고싶다면 이렇게,,,</h2>
    </React.Fragment>
  );
}
