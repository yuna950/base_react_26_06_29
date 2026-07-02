export default function Contents_2({ name, food, sideMenu }) {
  return (
    <div
      style={{
        width: 200,
        height: 180,
        border: "5px solid lightblue",
        marginBottom: 10,
        borderRadius: 50,
        padding: 15,
      }}
    >
      <h2>이름 : {name}</h2>
      <p>음식 : {food} </p>
      <p>사이드메뉴 : {sideMenu} </p>
    </div>
  );
}
