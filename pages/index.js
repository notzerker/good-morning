import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Monke Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
