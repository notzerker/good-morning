import React from "react";

const Message = ({ text }) => {
  return (
    <div className="fixed w-full top-8 flex justify-center">
      <div className="bg-white rounded-md px-6 py-2 text-xs text-primary">
        {text}
      </div>
    </div>
  );
};

export default Message;
