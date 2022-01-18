import React from "react";
import { useMoralis } from "react-moralis";
import { BsArrowLeftShort } from "react-icons/bs";

const Connect = ({ setConnect }) => {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <div>
      <div
        className="flex flex-row space-x-2 cursor-pointer items-center justify-start mb-4"
        onClick={() => setConnect(true)}
      >
        <BsArrowLeftShort className="text-xl" />
        <p>Back</p>
      </div>
      {/* <p className="mb-2">Login with wallet to enter.</p> */}
      <button className="w-64 mb-2 justify-start" onClick={authenticate}>
        <img className="w-4 h-4" src="/metamask.svg" alt="" />
        <p>Metamask</p>
      </button>
      <button
        className="w-64 justify-start mb-20"
        onClick={() => authenticate({ provider: "walletconnect" })}
      >
        <img className="w-4 h-4" src="/walletconnect.svg" alt="" />
        <p>Wallet Connect</p>
      </button>
    </div>
  );
};

export default Connect;
