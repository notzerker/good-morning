import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ml-2 ${isUserMessage && "order-last"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`w-fit rounded-md px-6 py-2 text-sm drop-shadow-xl ${
          isUserMessage ? "text-dark bg-white" : "bg-dark text-white"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <TimeAgo
        className={`text-xs text-gray-800 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-6 text-xs trucate ${
          isUserMessage ? "text-white" : "text-dark"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Message;
