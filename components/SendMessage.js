import React from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  var emojis = [
    "😄",
    "😃",
    "😀",
    "😊",
    "😉",
    "😍",
    "😘",
    "😚",
    "😗",
    "😙",
    "😜",
    "😝",
    "😛",
    "😁",
    "😌",
    "😂",
    "😭",
    "😅",
    "😆",
    "😋",
    "😎",
    "😇",
    "😏",
    "😺",
    "😸",
    "😻",
    "😽",
    "😼",
    "😹",
    "🔥",
    "🌞",
    "💛",
  ];

  const getEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const message = "gm " + getEmoji();

  const scrollTo = (ref) => {
    if (!ref.current) return;
    else {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  scrollTo(endOfMessagesRef);

  const sendMessage = () => {
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //Message sent sucessfully
        },
        (error) => {
          console.log(error.message);
        }
      );

    scrollTo(endOfMessagesRef);
  };

  return (
    <div className="fixed bottom-12 z-50">
      <button className="bg-primary" onClick={() => sendMessage()}>
        gm
      </button>
    </div>
  );
};

export default SendMessage;
