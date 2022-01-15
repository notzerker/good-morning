import React from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { user } = useMoralis();
  return (
    <div className="pb-56">
      <div className="my-8">{/* Each Message */}</div>
      <div className="flex justify-center">
        <SendMessage />
      </div>
      <div className="text-center text-dark mt-5">
        <p>You're up to date!</p>
      </div>
    </div>
  );
};

export default Messages;
