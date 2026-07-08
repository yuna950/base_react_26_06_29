import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul className="border-b flex justify-between px-10 py-5 font-bold text-2xl ">
        <li>
          <Link to="/signup">SIGN UP</Link>
        </li>

        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </header>
  );
}
