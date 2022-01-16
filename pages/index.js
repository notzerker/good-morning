import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Good Morning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        {/* <img
          className="absolute w-full h-full object-cover"
          src="/images/bg.jpg"
          alt=""
        /> */}
        <Header />
        <Messages />
      </div>
    </div>
  );
}
