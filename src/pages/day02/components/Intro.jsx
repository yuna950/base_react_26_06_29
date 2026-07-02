export default function Intro({ name, age, hobby }) {
  //   console.log(props.name);
  //   console.log(props.age);
  // ----------------------------

  //   const name = props.name;
  //   const age = props.age;
  // ----------------------------

  // const { name, age, hobby } = props;
  // => 객체 비구조화 할당

  return (
    <div
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <h2>자기소개</h2>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>취미 : {hobby}</p>
      <hr />
    </div>
  );
}
