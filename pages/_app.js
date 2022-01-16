import "../styles/globals.css";
import "../styles/tailwind.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="rf2snyWSLTz6PZX2vjySJ7rsqnZyG1w7M4EgpApC"
      serverUrl="https://uwjvnmgprf9l.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
