import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt("Enter username");

    if (!username) return;

    setUserData({ username });
  };

  return (
    <div className="text-xs absolute top-8 right-8">
      <button disabled={isUserUpdating} onClick={setUsername}>
        Change your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
