import React, { FC } from "react";
import Avatar from "./Avatar/RoundedAvatar";
import Button from "./Button/Button";
import { FiSun } from "react-icons/fi";
import { useThemeToggle } from "@/appstate/darkmode";

const Navbar: FC = () => {
  const { toggleTheme } = useThemeToggle();

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Avatar src="/yuvraj.jpg" alt="User Profile" size={60} />
          <div className="text-xl font-bold text-dark dark:text-light">
            Yuvraj
          </div>
        </div>
        <Button className={"px-4 py-2"} onClick={toggleTheme}>
          <FiSun className="text-2xl" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
