import { useMoralis } from "react-moralis";
import { BounceLoader } from "react-spinners";
import Message from "./Message";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <>
      {/* <Message text="Please verify wallet to login" /> */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-bold text-9xl mb-2 font-bold">Good Morning</h1>
        <p className="mb-12 text-xl">Have a great day. </p>
        <button className="w-64" onClick={authenticate}>
          <p>Connect Wallet</p>
          {isAuthenticating ? <BounceLoader color="#000000" size={20} /> : ""}
        </button>
      </div>
    </>
  );
};

export default Login;
