import React from "react";
import { useMoralis } from "react-moralis";

const SendMessage = () => {
  const { user } = useMoralis();
  const message = "gm";

  const sendMessage = () => {
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then((message) => {});
  };

  return <button className="fixed bottom-12">gm</button>;
};

export default SendMessage;
