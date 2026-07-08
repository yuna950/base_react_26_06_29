import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import Day01 from "./pages/day01/Day01";
import Day02 from "./pages/day02/Day02";
import Day03 from "./pages/day03/Day03";
import Day04 from "./pages/dsy04/Day04";
import Day05 from "./pages/day05/Day05";
import Day06 from "./pages/day06/Day06";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* jsx 문법 */}
    {/* <day01 /> */}

    {/* component & props */}
    {/* <Day02 /> */}

    {/* tailwind css */}
    {/* <Day03 /> */}

    {/* hook&state */}
    {/* <Day04 /> */}

    {/* map */}
    {/* <Day05 /> */}

    <Day06 />
  </StrictMode>,
);

// 컴포넌트는 첫글자 대문자
