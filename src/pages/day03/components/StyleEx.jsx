// import "../../../style/style.css";

export default function StyleEx() {
  const w = 300;
  return (
    <div>
      <div
        style={{
          width: w,
          height: 300,
          backgroundColor: "lightblue",
          fontSize: "30px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        인라인 스타일
      </div>

      <div className="box">외부 스타일</div>
    </div>
  );
}
