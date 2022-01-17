import { useState } from "react";
import { useMoralis } from "react-moralis";
import Modal from "./Modal";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <>
      <Modal open={modal} setOpen={setModal} />
      <div className="text-xs absolute top-8 right-8">
        <button disabled={isUserUpdating} onClick={modalHandler}>
          Change Username
        </button>
      </div>
    </>
  );
};

export default ChangeUsername;
