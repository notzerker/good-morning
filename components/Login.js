import { useMoralis } from "react-moralis";
import { BounceLoader } from "react-spinners";
import { IoIosPartlySunny } from "react-icons/io";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center dark:bg-dark bg-primary text-black dark:text-white">
        <IoIosPartlySunny className="text-9xl mb-10" />
        <h1 className="text-bold text-7xl text-center lg:text-9xl mb-2 font-bold">
          Good Morning
        </h1>
        <p className="mb-12 text-xl text-center">Have a good day.</p>
        <button className="w-64 mb-20" onClick={authenticate}>
          <p>Connect Wallet</p>
          {isAuthenticating ? <BounceLoader color="#000000" size={20} /> : ""}
        </button>
      </div>
    </>
  );
};

export default Login;
