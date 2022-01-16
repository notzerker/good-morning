import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user, logout } = useMoralis();

  return (
    <div className="sticky top-0 w-full h-64 bg-primary flex flex-row justify-center items-center px-8 z-50">
      <div className="flex flex-col justify-center items-center">
        <div className="h-24 w-24 relative mb-8">
          <Avatar />
        </div>
        <h1 className="text-dark text-5xl font-bold mb-2">Good Morning!</h1>
        <p className="text-lg">Say it back</p>
        {/* <h2 className=" truncate">{user.getUsername()}</h2> */}
      </div>
      <button className="absolute text-xs top-8 left-8" onClick={logout}>
        Logout
      </button>
      <ChangeUsername />
    </div>
  );
};

export default Header;
