import { Link } from "react-router-dom";
import { APP_NAME } from "../constants/constants";
import { Logo } from "./Logo";

export const Layout = ({ children }) => {
  return (
    <div className="text-gray-800 flex flex-col min-h-screen">
      <nav className="px-6 bg-purple-700 h-[90px] flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="text-white font-bold">{APP_NAME}</h1>
      </nav>
      <div className="flex-1">{children}</div>
      <footer className="h-[80px] bg-purple-700 px-6 flex flex-col justify-center text-white py-2">
        {APP_NAME}
      </footer>
    </div>
  );
};
