import { useMoralis } from "react-moralis";
import { BounceLoader } from "react-spinners";
import Message from "./Message";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <>
      {/* <Message text="Please verify wallet to login" /> */}
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
        {/* <h1 className="text-bold text-3xl mb-4">Monke Chat</h1> */}
        <button className="w-64" onClick={authenticate}>
          <p>Connect Wallet</p>
          {isAuthenticating ? <BounceLoader color="#1a1a1a" size={20} /> : ""}
        </button>
      </div>
    </>
  );
};

export default Login;
