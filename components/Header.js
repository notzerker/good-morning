import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user, logout } = useMoralis();

  return (
    <div className="sticky top-0 w-full h-64 bg-primary flex flex-row justify-center items-center px-8 z-50">
      <div className="flex flex-col justify-start items-center mt-12">
        <div className="w-fit flex flex-row justify-center items-center space-x-4 shadow-xl rounded-lg border-2 border-black mb-8 py-3 px-8">
          <div className="h-24 w-24 relative">
            <Avatar />
          </div>
          <div className="w-32 flex flex-col">
            <h2 className="text-black font-bold truncate">
              {user.getUsername()}
            </h2>
            <h2 className="text-gray-800 truncate text-sm">
              {user.get("ethAddress")}
            </h2>
          </div>
        </div>
        <h1 className="text-dark text-5xl font-bold mb-2">Good Morning!</h1>
        <p className="text-lg">Say it back</p>
      </div>
      <button className="absolute text-xs top-8 left-8" onClick={logout}>
        Logout
      </button>
      <ChangeUsername />
    </div>
  );
};

export default Header;
