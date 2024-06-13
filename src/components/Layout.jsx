import { Link } from "react-router-dom";
import { APP_NAME } from "../constants/constants";
import { Logo } from "./Logo";

export const Layout = ({ children }) => {
  return (
    <div className="text-gray-800">
      <nav className="px-6 bg-purple-700 h-[70px] flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="text-white font-bold">{APP_NAME}</h1>
      </nav>
      {children}
    </div>
  );
};
