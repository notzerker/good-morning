import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user, logout } = useMoralis();

  return (
    <div className="sticky top-0 w-full h-80 backdrop-blur-xl flex flex-row justify-between items-center px-8">
      <div className="relative h-24 w-24 hidden lg:inline"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-48 w-48 relative mb-8">
          <Avatar />
        </div>
        <h1 className="text-dark text-3xl font-bold">Good Morning! 🌞</h1>
        <h2 className=" truncate">{user.getUsername()}</h2>
      </div>
      <button className="" onClick={logout}>
        Logout
      </button>
      <ChangeUsername />
    </div>
  );
};

export default Header;
