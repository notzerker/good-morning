import React, { useState } from "react";
import { useMoralis } from "react-moralis";

const Modal = ({ open, setOpen }) => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const currentUsername = user.getUsername();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const username = value;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const setUsername = () => {
    if (!username) {
      return;
    }

    setUserData({ username });
    setOpen(false);
    setValue("");
    setError("");
  };

  return (
    <div
      className={`absolute top-8 w-96 h-44 bg-primary border-2 border-black rounded-md z-50 transition-all shadow-lg flex flex-col items-center justify-center ${
        open ? "translate-y-0" : "-translate-y-96"
      }`}
    >
      <p className="mb-2">Username</p>
      <input
        className="mb-4 bg-primary text-black border-2 border-black focus:outline-none rounded-md px-2 placeholder-black focus:placeholder-transparent"
        placeholder={currentUsername}
        onChange={valueChangeHandler}
        value={value}
      ></input>
      {/* <p className="mb-2 text-xs">{error}</p>
      <p>{username}</p> */}
      <button className="text-xs" onClick={() => setUsername()}>
        Change
      </button>
    </div>
  );
};

export default Modal;
