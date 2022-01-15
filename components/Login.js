import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate, isInitializing } = useMoralis();

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {/* <h1 className="text-bold text-3xl mb-4">Monke Chat</h1> */}
      <button
        className="text-black rounded-lg bg-gray-300 w-fit px-24 py-4 flex justify-center"
        onClick={authenticate}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Login;
