import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Day01 from "./pages/day01/Day01";
import Day02 from "./pages/day02/Day02";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* jsx 문법 */}
    {/* <day01 />; */}

    <Day02 />
  </StrictMode>,
);

// 컴포넌트는 첫글자 대문자
