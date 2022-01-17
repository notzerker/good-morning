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
        className={`w-fit rounded-md px-4 py-2 lg:px-6 lg:py-2 text-xs lg:text-sm drop-shadow-xl ${
          isUserMessage ? "text-dark bg-white" : "bg-dark text-white"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <div
        className={`w-44 absolute -bottom-6 flex flex-row ${
          isUserMessage ? "justify-end" : "justify-start"
        }`}
      >
        <p
          className={`text-xs truncate ${
            isUserMessage ? "text-white" : "text-dark"
          }`}
        >
          {message.get("username")}
        </p>
        <TimeAgo
          className={`text-xs text-gray-600 whitespace-nowrap ${
            isUserMessage ? "order-first pr-2" : "pl-2"
          }`}
          datetime={message.createdAt}
        />
      </div>
    </div>
  );
};

export default Message;
