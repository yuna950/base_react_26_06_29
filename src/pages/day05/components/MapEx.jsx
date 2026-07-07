export default function MapEx() {
  const arrs = [1, 2, 3, 4, 5];

  // map은 배열에만 사용 가능
  //   arrs.map((num) => console.log(`숫자 : ${num}`));
  //   => map은 배열을 순회하면서 각 요소를 변환하여 새로운 배열을 반환함

  return (
    <div>
      {arrs.map((num) => (
        <h2 key={num}>숫자 : {num} 💖 </h2>
        // => key = 배열 안에 있는 겹치지 않는 값.
        // => jsx에서 map을 사용할 때 반드시 key를 써야하며 값으로는 고유값이 지정되어야 함
      ))}
    </div>
  );
}
